'use server'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

// Initialize clients
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)
const resend = new Resend(process.env.RESEND_API_KEY)

export type ActionResponse = {
    success: boolean;
    message: string;
}

export async function submitQuote(formData: FormData): Promise<ActionResponse> {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const service = formData.get('service') as string
    const budget = formData.get('budget') as string
    const details = formData.get('details') as string

    // 1. Save to Supabase
    const { error: dbError } = await supabase
        .from('leads')
        .insert([{ name, email, service, budget, details }])

    if (dbError) {
        console.error('Database Error:', dbError)
        return { success: false, message: 'Failed to save lead.' }
    }

    // 2. Send Email Notification to Robin
    try {
        const { error } = await resend.emails.send({
            from: 'Portfolio Bot <hello@robingautam.in>',
            to: 'gautam.robin333@gmail.com',
            subject: `🔥 New Lead: ${name} (${budget})`,
            html: `
        <h1>🚀 New Project Intake</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <p><strong>Business Target:</strong> ${service}</p>
        <p><strong>Project Stage:</strong> ${budget}</p>
        <p><strong>Intake Details:</strong><br/>${details.replace(/\n/g, '<br/>')}</p>
      `
        })

        if (error) {
            console.error('Resend API Error:', error);
            return { success: true, message: 'Quote saved, but email failed: ' + error.message };
        }

    } catch (emailError) {
        console.error('Email Execution Error:', emailError);
        return { success: true, message: 'Quote saved, but email failed to send.' };
    }

    // 3. Send Confirmation Email to Client
    try {
        await resend.emails.send({
            from: 'Robin Gautam <hello@robingautam.in>',
            to: email,
            subject: `Brief Received — Robin Gautam Studio`,
            html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Courier New',Courier,monospace;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="border-bottom:2px solid #E85D26;padding-bottom:20px;margin-bottom:32px;">
      <h1 style="color:#ffffff;font-size:28px;font-weight:bold;margin:0;letter-spacing:2px;text-transform:uppercase;">
        ROBIN GAUTAM
      </h1>
      <p style="color:#666;font-size:12px;margin:8px 0 0;letter-spacing:3px;text-transform:uppercase;">
        // BRIEF RECEIVED
      </p>
    </div>

    <!-- Body -->
    <div style="margin-bottom:32px;">
      <p style="color:#ffffff;font-size:18px;margin:0 0 16px;font-weight:bold;">
        Hey ${name},
      </p>
      <p style="color:#a0a0a0;font-size:15px;line-height:1.7;margin:0 0 24px;">
        Your project brief has been transmitted successfully. I've received your intake and will review it within the next 24 hours.
      </p>
      <p style="color:#a0a0a0;font-size:15px;line-height:1.7;margin:0 0 24px;">
        Expect a response via WhatsApp or email with next steps, initial thoughts, and a proposed timeline.
      </p>
    </div>

    <!-- Brief Summary Card -->
    <div style="background-color:#111;border:1px solid #1a1a1a;padding:24px;margin-bottom:32px;">
      <p style="color:#E85D26;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 16px;font-weight:bold;">
        // YOUR BRIEF SUMMARY
      </p>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="color:#666;font-size:12px;padding:8px 0;text-transform:uppercase;letter-spacing:1px;vertical-align:top;width:120px;">Business</td>
          <td style="color:#fff;font-size:14px;padding:8px 0;font-weight:bold;">${service}</td>
        </tr>
        <tr>
          <td style="color:#666;font-size:12px;padding:8px 0;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Stage</td>
          <td style="color:#fff;font-size:14px;padding:8px 0;font-weight:bold;">${budget}</td>
        </tr>
        <tr>
          <td style="color:#666;font-size:12px;padding:8px 0;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Details</td>
          <td style="color:#a0a0a0;font-size:13px;padding:8px 0;line-height:1.6;">${details.replace(/\n/g, '<br/>')}</td>
        </tr>
      </table>
    </div>

    <!-- CTA -->
    <div style="text-align:center;margin-bottom:32px;">
      <a href="https://wa.me/918292511007" target="_blank" style="display:inline-block;background-color:#E85D26;color:#000;font-size:14px;font-weight:bold;text-decoration:none;padding:14px 32px;letter-spacing:2px;text-transform:uppercase;">
        REACH ME ON WHATSAPP →
      </a>
    </div>

    <!-- Footer -->
    <div style="border-top:1px solid #1a1a1a;padding-top:20px;text-align:center;">
      <p style="color:#444;font-size:11px;margin:0 0 4px;letter-spacing:2px;text-transform:uppercase;">
        Robin Gautam · RG Studio · New Delhi, IN
      </p>
      <p style="color:#333;font-size:11px;margin:0;">
        <a href="https://robingautam.in" style="color:#E85D26;text-decoration:none;">robingautam.in</a>
      </p>
    </div>

  </div>
</body>
</html>`
        })
    } catch (clientEmailError) {
        // Don't fail the submission if client email fails
        console.error('Client Confirmation Email Error:', clientEmailError);
    }

    return { success: true, message: 'Quote received!' }
}

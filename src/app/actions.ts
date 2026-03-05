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
  const refNumber = `RG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  // Parse phone from details
  const phoneMatch = details.match(/Phone:\s*(.+)/)
  const phone = phoneMatch ? phoneMatch[1].trim() : 'On file'
  const objectiveMatch = details.match(/Objective:\s*([\s\S]+)/)
  const objective = objectiveMatch ? objectiveMatch[1].trim() : details

  try {
    await resend.emails.send({
      from: 'Robin Gautam <hello@robingautam.in>',
      to: email,
      subject: `Brief Received · ${refNumber} — Robin Gautam Studio`,
      text: `BRIEF RECEIVED, ${name}.\n\nYour project brief has been transmitted successfully.\nI will respond within 24 hours.\nExpect: initial thoughts, a proposed timeline, and next steps via WhatsApp or email.\n\nYOUR BRIEF SUMMARY\n- Business: ${service}\n- Stage: ${budget}\n- Objective: ${objective}\n- Contact: ${phone}\n- Status: UNDER REVIEW\n\nWHAT HAPPENS NEXT\n[01] Brief reviewed within 24 hours\n[02] WhatsApp/email response with initial thoughts\n[03] Strategy call scheduled if project is a fit\n[04] Protocol initiated — build begins\n\nReach me on WhatsApp: https://wa.me/918292511007\nTypical response: under 2 hours\n\nRef: ${refNumber}\nTimestamp: ${timestamp}\n\n— Robin Gautam · RG Studio · New Delhi, IN\nrobingautam.in`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="dark" />
<meta name="supported-color-schemes" content="dark" />
<title>Brief Received - Robin Gautam Studio</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Courier New',Courier,monospace;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<!-- WRAPPER TABLE -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#0a0a0a;">
<tr><td align="center" style="padding:16px;">

<!-- MAIN CONTAINER 600px -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:#0a0a0a;">

<!-- === HEADER === -->
<tr>
<td style="background-color:#111111;border-bottom:2px solid #E85D26;padding:20px 32px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td width="40" valign="middle">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr><td style="background-color:#E85D26;padding:6px 10px;color:#000000;font-family:'Courier New',Courier,monospace;font-size:14px;font-weight:bold;letter-spacing:1px;">RG</td></tr>
      </table>
    </td>
    <td align="right" valign="middle" style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#888888;letter-spacing:1px;">
      ROBIN GAUTAM &middot; RG STUDIO
    </td>
  </tr>
  </table>
</td>
</tr>

<!-- === STATUS BAR === -->
<tr>
<td style="background-color:#0d0d0d;border-bottom:1px solid #1a1a1a;padding:12px 32px;font-family:'Courier New',Courier,monospace;font-size:11px;color:#25D366;letter-spacing:0.5px;">
  &#9679; TRANSMISSION SUCCESSFUL &middot; BRIEF RECEIVED &middot; REF: ${refNumber}
</td>
</tr>

<!-- === GREETING === -->
<tr>
<td style="background-color:#0a0a0a;padding:32px 32px 8px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:28px;font-weight:bold;color:#ffffff;text-transform:uppercase;line-height:1.2;">BRIEF RECEIVED,</td></tr>
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:28px;font-weight:bold;color:#E85D26;text-transform:uppercase;line-height:1.2;padding-bottom:16px;">${name}.</td></tr>
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#555555;line-height:1.8;">// TIMESTAMP: ${timestamp}</td></tr>
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#555555;line-height:1.8;">// REF: ${refNumber}</td></tr>
  </table>
</td>
</tr>

<!-- === TERMINAL MESSAGE === -->
<tr>
<td style="background-color:#0a0a0a;padding:20px 32px 28px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#a84420;padding-bottom:12px;">$ cat brief_status.txt</td></tr>
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#a0a0a0;line-height:1.8;padding-left:8px;padding-bottom:3px;">&gt; Your project brief has been transmitted successfully.</td></tr>
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#a0a0a0;line-height:1.8;padding-left:8px;padding-bottom:3px;">&gt; I will respond within 24 hours of receiving this.</td></tr>
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#a0a0a0;line-height:1.8;padding-left:8px;padding-bottom:3px;">&gt; Expect: initial thoughts, a proposed timeline, and next steps</td></tr>
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#a0a0a0;line-height:1.8;padding-left:8px;">&gt; via WhatsApp or email. Stand by.</td></tr>
  </table>
</td>
</tr>

<!-- === BRIEF SUMMARY CARD === -->
<tr>
<td style="padding:0 32px 24px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#0d0d0d;border:1px solid #222222;border-left:4px solid #E85D26;">

    <!-- Summary Header -->
    <tr>
    <td style="padding:16px 20px 12px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#E85D26;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">// YOUR BRIEF SUMMARY</td>
        <td align="right" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#ff4444;font-weight:bold;letter-spacing:2px;">[CLASSIFIED]</td>
      </tr>
      </table>
    </td>
    </tr>

    <!-- Divider -->
    <tr><td style="padding:0 20px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-bottom:1px solid #1a1a1a;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>

    <!-- Row: OPERATOR -->
    <tr>
    <td style="padding:0 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="100" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:1px;padding:10px 0;vertical-align:top;">OPERATOR</td>
        <td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#ffffff;font-weight:bold;padding:10px 0;vertical-align:top;">${name}</td>
      </tr>
      </table>
    </td>
    </tr>
    <tr><td style="padding:0 20px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-bottom:1px solid #111111;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>

    <!-- Row: BUSINESS -->
    <tr>
    <td style="padding:0 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="100" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:1px;padding:10px 0;vertical-align:top;">BUSINESS</td>
        <td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#ffffff;font-weight:bold;padding:10px 0;vertical-align:top;">${service}</td>
      </tr>
      </table>
    </td>
    </tr>
    <tr><td style="padding:0 20px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-bottom:1px solid #111111;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>

    <!-- Row: STAGE -->
    <tr>
    <td style="padding:0 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="100" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:1px;padding:10px 0;vertical-align:top;">STAGE</td>
        <td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#ffffff;font-weight:bold;padding:10px 0;vertical-align:top;">${budget}</td>
      </tr>
      </table>
    </td>
    </tr>
    <tr><td style="padding:0 20px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-bottom:1px solid #111111;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>

    <!-- Row: OBJECTIVE -->
    <tr>
    <td style="padding:0 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="100" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:1px;padding:10px 0;vertical-align:top;">OBJECTIVE</td>
        <td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#ffffff;font-weight:bold;padding:10px 0;vertical-align:top;">${objective.replace(/\n/g, '<br/>')}</td>
      </tr>
      </table>
    </td>
    </tr>
    <tr><td style="padding:0 20px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-bottom:1px solid #111111;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>

    <!-- Row: CONTACT -->
    <tr>
    <td style="padding:0 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="100" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:1px;padding:10px 0;vertical-align:top;">CONTACT</td>
        <td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#ffffff;font-weight:bold;padding:10px 0;vertical-align:top;">${phone}</td>
      </tr>
      </table>
    </td>
    </tr>
    <tr><td style="padding:0 20px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="border-bottom:1px solid #111111;font-size:0;line-height:0;">&nbsp;</td></tr></table></td></tr>

    <!-- Row: STATUS -->
    <tr>
    <td style="padding:0 20px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td width="100" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#555555;text-transform:uppercase;letter-spacing:1px;padding:10px 0;vertical-align:top;">STATUS</td>
        <td style="font-family:'Courier New',Courier,monospace;font-size:13px;color:#25D366;font-weight:bold;padding:10px 0;vertical-align:top;">&#9679; UNDER REVIEW</td>
      </tr>
      </table>
    </td>
    </tr>

  </table>
</td>
</tr>

<!-- === WHAT HAPPENS NEXT === -->
<tr>
<td style="padding:0 32px 28px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr><td style="font-family:'Courier New',Courier,monospace;font-size:11px;color:#E85D26;font-weight:bold;letter-spacing:2px;text-transform:uppercase;padding-bottom:16px;">// WHAT HAPPENS NEXT</td></tr>
  </table>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-left:1px solid #1a1a1a;padding-left:12px;">
  <tr>
    <td width="40" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#E85D26;font-weight:bold;padding:6px 0;vertical-align:top;">[01]</td>
    <td style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#888888;padding:6px 0;vertical-align:top;">Brief reviewed within 24 hours</td>
  </tr>
  <tr>
    <td width="40" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#E85D26;font-weight:bold;padding:6px 0;vertical-align:top;">[02]</td>
    <td style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#888888;padding:6px 0;vertical-align:top;">WhatsApp or email response with initial thoughts</td>
  </tr>
  <tr>
    <td width="40" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#E85D26;font-weight:bold;padding:6px 0;vertical-align:top;">[03]</td>
    <td style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#888888;padding:6px 0;vertical-align:top;">Strategy call scheduled if project is a fit</td>
  </tr>
  <tr>
    <td width="40" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#E85D26;font-weight:bold;padding:6px 0;vertical-align:top;">[04]</td>
    <td style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#888888;padding:6px 0;vertical-align:top;">Protocol initiated &mdash; build begins</td>
  </tr>
  </table>
</td>
</tr>

<!-- === CTA BUTTON === -->
<tr>
<td align="center" style="padding:8px 32px 8px;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center" style="background-color:#E85D26;border-radius:2px;">
      <a href="https://wa.me/918292511007" target="_blank" style="display:inline-block;padding:14px 32px;font-family:'Courier New',Courier,monospace;font-size:13px;font-weight:bold;color:#000000;text-decoration:none;letter-spacing:0.1em;text-transform:uppercase;">REACH ME ON WHATSAPP &rarr;</a>
    </td>
  </tr>
  </table>
</td>
</tr>
<tr>
<td align="center" style="padding:8px 32px 32px;font-family:'Courier New',Courier,monospace;font-size:11px;color:#555555;">
  Opens WhatsApp &middot; Typical response: under 2 hours
</td>
</tr>

<!-- === FOOTER === -->
<tr>
<td style="background-color:#111111;border-top:1px solid #1a1a1a;padding:20px 32px;text-align:center;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr><td align="center" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#444444;letter-spacing:1px;text-transform:uppercase;padding-bottom:6px;">ROBIN GAUTAM &middot; RG STUDIO &middot; NEW DELHI, IN</td></tr>
  <tr><td align="center" style="font-family:'Courier New',Courier,monospace;font-size:10px;padding-bottom:6px;"><a href="https://robingautam.in" style="color:#E85D26;text-decoration:none;">robingautam.in</a></td></tr>
  <tr><td align="center" style="font-family:'Courier New',Courier,monospace;font-size:10px;color:#333333;">&copy; 2026 RG Studio. You're receiving this because you submitted a project brief.</td></tr>
  </table>
</td>
</tr>

</table>
<!-- END MAIN CONTAINER -->

</td></tr>
</table>
<!-- END WRAPPER -->

</body>
</html>`
    })
  } catch (clientEmailError) {
    // Don't fail the submission if client email fails
    console.error('Client Confirmation Email Error:', clientEmailError);
  }

  return { success: true, message: 'Quote received!' }
}

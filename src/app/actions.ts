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

    // 2. Send Email Notification
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

    return { success: true, message: 'Quote received!' }
}

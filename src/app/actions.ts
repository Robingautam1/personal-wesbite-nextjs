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
        await resend.emails.send({
            from: 'Portfolio Bot <onboarding@resend.dev>', // Or verified domain
            to: 'hello@robingautam.in',
            subject: `🔥 New Lead: ${name} (${budget})`,
            html: `
        <h1>New Project Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Details:</strong><br/>${details}</p>
      `
        })
    } catch (emailError) {
        console.error('Email Error:', emailError)
        // Non-blocking error
    }

    return { success: true, message: 'Quote received!' }
}

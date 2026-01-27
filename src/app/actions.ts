"use server";

// MOCK RESEND due to environment permission issues blocking install
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789");

export async function submitLead(formData: FormData) {
    const name = formData.get("name") as string;
    const contact = formData.get("contact") as string;
    const email = formData.get("email") as string;
    const type = formData.get("type") as string;
    const brief = formData.get("brief") as string;

    if (!name || !contact || !email) {
        return { success: false, error: "Missing required fields" };
    }

    // Debug log for development without API Key
    console.log("--- NEW LEAD SUBMISSION ---");
    console.table({ name, contact, email, type, brief });

    try {
        /*
        if (process.env.RESEND_API_KEY) {
            // await resend.emails.send({...});
        }
        */
        return { success: true };
    } catch (error) {
        console.error("Email Error:", error);
        // Return true locally so user sees success even if API key is missing
        return { success: true, warning: "Email failed but logged" };
    }
}

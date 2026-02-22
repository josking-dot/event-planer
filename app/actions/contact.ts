"use server";

export interface ContactFormState {
    success: boolean;
    message: string;
}

export async function submitContactForm(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const eventType = formData.get("eventType")?.toString();
    const details = formData.get("details")?.toString().trim();

    // Validation
    if (!name || name.length < 2) {
        return { success: false, message: "Please provide a valid name." };
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, message: "Please provide a valid email address." };
    }
    if (!eventType) {
        return { success: false, message: "Please select an event type." };
    }
    if (!details || details.length < 10) {
        return {
            success: false,
            message: "Please tell us a bit more about your event (at least 10 characters).",
        };
    }

    // In a production environment, you would send an email or write to a database here.
    // For now, we log the submission to the server console.
    console.log("📩 New Contact Inquiry:", {
        name,
        email,
        eventType,
        details,
        submittedAt: new Date().toISOString(),
    });

    // Simulate a short delay (e.g., DB write / email dispatch)
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
        success: true,
        message: `Thank you, ${name}! We've received your inquiry and will be in touch within 24 hours.`,
    };
}

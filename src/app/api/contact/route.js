import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email with plain HTML - No React Email needed
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["rahul865162@gmail.com"], // Change this to your email
      subject: `New Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
         <h2 style="color: #3480c2; text-align: center;">New Contact Form Submission</h2>
        
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; line-height: 1.6;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;" />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

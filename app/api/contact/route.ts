import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Form data received:", body);

    const { data, error } = await resend.emails.send({
      from: "Website Form <onboarding@resend.dev>",
      to: ["Info@abroadifyedu.com"],
      subject: `New Inquiry from ${body.name}`,
      html: `
        <h2>New Study Abroad Inquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>City:</strong> ${body.city}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Destination:</strong> ${body.destination}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Qualification:</strong> ${body.qualification}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
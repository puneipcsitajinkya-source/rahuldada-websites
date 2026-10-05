import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseErr) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload provided." },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message, sendCopy } = body || {};

    // Basic Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please write a message with at least 5 characters." },
        { status: 400 }
      );
    }

    // Trigger Nodemailer
    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "",
      subject: subject ? subject.trim() : "General Inquiry",
      message: message.trim(),
      sendCopy: Boolean(sendCopy),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! Our team will get back to you shortly.",
      refId: result.refId,
      isTest: result.isTest,
      timestamp: result.timestamp,
    });
  } catch (error) {
    console.error("Error in contact API route handler:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to send your message. Please try again or reach out by phone.",
      },
      { status: 500 }
    );
  }
}

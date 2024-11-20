import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, name, subject, text } = await req.json();

    await resend.emails.send({
      from: "noreply@jonathantweber.com",
      to: "jonathantweber@gmail.com",
      subject: `New message from ${name}`,
      react: EmailTemplate({ email, name, subject, text }),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

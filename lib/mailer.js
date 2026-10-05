import nodemailer from "nodemailer";
import { org } from "@/lib/siteData";

/**
 * Returns a configured Nodemailer transporter.
 * Supports:
 *  1) Gmail service via GMAIL_USER + GMAIL_APP_PASSWORD
 *  2) Custom SMTP via SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *  3) Safe fallback if credentials are not yet configured:
 *     Logs formatted email to console and returns success so local testing never hangs or crashes.
 */
export async function getTransporter() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;

  if (gmailUser && gmailPass) {
    return {
      transporter: nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      }),
      isTest: false,
      fromAddress: gmailUser,
    };
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

  if (smtpHost && smtpUser && smtpPass) {
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      }),
      isTest: false,
      fromAddress: smtpUser,
    };
  }

  // Development Fallback: Safe JSON transport that logs without network delay
  const devTransporter = nodemailer.createTransport({
    streamTransport: true,
    newline: "windows",
    buffer: true,
  });

  return {
    transporter: devTransporter,
    isTest: true,
    fromAddress: `"Navchaitanya Mandal" <noreply@navchaitanya.org>`,
  };
}

/**
 * Format IST Date Time
 */
function getFormattedDate() {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

/**
 * Send Contact Form emails:
 * 1) Admin notification
 * 2) Optional sender confirmation copy
 */
export async function sendContactEmail({ name, email, phone, subject, message, sendCopy = false }) {
  const { transporter, isTest, fromAddress } = await getTransporter();
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || org.email || "navchaitanys@gmail.com";
  const refId = `NC-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const formattedDate = getFormattedDate();
  const cleanedPhone = phone ? phone.trim() : "Not provided";
  const selectedSubject = subject || "General Inquiry";

  // HTML template for Admin Notification
  const adminHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f3ff; margin: 0; padding: 24px; color: #18132b; }
        .card { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(124,58,237,0.08); border: 1px solid #e9d5ff; }
        .header { background: linear-gradient(135deg, #7C3AED 0%, #10B981 100%); color: #ffffff; padding: 28px 32px; }
        .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
        .header p { margin: 6px 0 0; font-size: 13.5px; opacity: 0.9; }
        .badge { display: inline-block; background: #ffffff; color: #7C3AED; font-weight: 700; font-size: 12px; padding: 4px 12px; border-radius: 999px; margin-top: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
        .content { padding: 32px; }
        .field-group { margin-bottom: 20px; }
        .field-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 4px; }
        .field-value { font-size: 16px; color: #18132b; font-weight: 500; }
        .message-box { background: #faf8fe; border-left: 4px solid #7C3AED; border-radius: 0 12px 12px 0; padding: 18px 20px; font-size: 15px; line-height: 1.6; color: #2e274d; white-space: pre-wrap; margin-top: 16px; }
        .actions { margin-top: 28px; padding-top: 20px; border-top: 1px solid #f3f4f6; display: flex; gap: 12px; }
        .btn { display: inline-block; background: #7C3AED; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 14px; }
        .btn-green { background: #10B981; }
        .footer { background: #fdfcff; padding: 18px 32px; border-top: 1px solid #f1f0f7; font-size: 12px; color: #8f88b0; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>New Contact Inquiry</h1>
          <p>${org.name} &bull; Shiroli, Yavatmal</p>
          <span class="badge">${selectedSubject}</span>
        </div>
        <div class="content">
          <div class="field-group">
            <div class="field-label">Reference ID</div>
            <div class="field-value" style="font-family: monospace; color: #7C3AED; font-weight: 700;">${refId}</div>
          </div>
          <div class="field-group">
            <div class="field-label">Full Name</div>
            <div class="field-value">${name}</div>
          </div>
          <div class="field-group">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #7C3AED; text-decoration: none;">${email}</a></div>
          </div>
          <div class="field-group">
            <div class="field-label">Phone / WhatsApp</div>
            <div class="field-value">${cleanedPhone}</div>
          </div>
          <div class="field-group">
            <div class="field-label">Submission Time</div>
            <div class="field-value">${formattedDate}</div>
          </div>
          <div class="field-group" style="margin-top: 24px;">
            <div class="field-label">Message Details</div>
            <div class="message-box">${message}</div>
          </div>

          <div class="actions">
            <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(selectedSubject)}%20-%20Navchaitanya%20Yuva%20Mandal" class="btn">Reply via Email</a>
            ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="btn btn-green">WhatsApp Chat</a>` : ""}
          </div>
        </div>
        <div class="footer">
          Received via the Navchaitanya Yuva Mandal official website contact form.<br>
          Shiroli, Taluka Ghatanji, District Yavatmal, Maharashtra – 445301
        </div>
      </div>
    </body>
    </html>
  `;

  // 1) Send email to Admin
  const adminMailOptions = {
    from: `"Navchaitanya Website" <${fromAddress}>`,
    to: receiverEmail,
    replyTo: email,
    subject: `[Contact Form] ${selectedSubject} — ${name}`,
    text: `New contact form submission from ${name}\nEmail: ${email}\nPhone: ${cleanedPhone}\nSubject: ${selectedSubject}\nTime: ${formattedDate}\n\nMessage:\n${message}`,
    html: adminHtml,
  };

  const adminInfo = await transporter.sendMail(adminMailOptions);

  if (isTest) {
    console.log("==================================================================");
    console.log("✉️  NODEMAILER TRIGGERED (Development Stream Mode)");
    console.log(`To: ${receiverEmail}`);
    console.log(`From: ${name} <${email}> (${cleanedPhone})`);
    console.log(`Subject: [Contact Form] ${selectedSubject} — ${name}`);
    console.log(`Reference ID: ${refId}`);
    console.log("Message:\n", message);
    console.log("💡 Tip: To send real emails, add GMAIL_USER & GMAIL_APP_PASSWORD to .env.local");
    console.log("==================================================================");
  } else {
    console.log(`✅ Real email delivered to ${receiverEmail} via Nodemailer (Ref: ${refId})`);
  }

  // 2) User Confirmation Email (if user provided valid email)
  let userAckSent = false;
  if (email && email.includes("@")) {
    try {
      const userHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf8fe; margin: 0; padding: 24px; color: #18132b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(124,58,237,0.08); border: 1px solid #e9d5ff; }
            .header { background: linear-gradient(135deg, #7C3AED 0%, #10B981 100%); color: #ffffff; padding: 28px 32px; text-align: center; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
            .content { padding: 32px; }
            .box { background: #f5f3ff; border-radius: 12px; padding: 18px 20px; font-size: 14.5px; line-height: 1.6; margin: 16px 0; color: #2e274d; }
            .footer { background: #fdfcff; padding: 18px 32px; border-top: 1px solid #f1f0f7; font-size: 12px; color: #8f88b0; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Namaste, ${name}!</h1>
              <p style="margin: 4px 0 0; opacity: 0.9;">We have received your message</p>
            </div>
            <div class="content">
              <p style="font-size: 15px; line-height: 1.6;">Thank you for writing to <strong>${org.name}</strong>. Our volunteer team has received your message regarding <strong>${selectedSubject}</strong> (Ref: <code style="color: #7C3AED;">${refId}</code>).</p>
              
              <p style="font-size: 14px; color: #5e5680; margin-top: 14px;">Here is a copy of what you shared with us:</p>
              <div class="box">
                ${message}
              </div>

              <p style="font-size: 14px; line-height: 1.6; color: #5e5680;">
                We usually review messages and respond within 24 to 48 hours. If your query is urgent or related to emergency bird rescue / field activities, feel free to contact us directly at <a href="tel:+919421770995" style="color: #7C3AED; font-weight: 600;">+91 9421770995</a>.
              </p>
            </div>
            <div class="footer">
              ${org.name}<br>
              ${org.address}<br>
              Phone: ${org.phone} &bull; Email: ${org.email}
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"Navchaitanya Yuva Mandal" <${fromAddress}>`,
        to: email,
        subject: `Thank you for reaching out — ${org.shortName} [Ref: ${refId}]`,
        text: `Namaste ${name},\n\nThank you for reaching out to ${org.name}. We have received your inquiry regarding "${selectedSubject}".\n\nReference ID: ${refId}\n\nOur team will review your message and get in touch with you soon.\n\nWarm regards,\nNavchaitanya Bahuuddeshiya Vikas Yuva Mandal\nShiroli, Ghatanji, Yavatmal`,
        html: userHtml,
      });
      userAckSent = true;
    } catch (e) {
      console.warn("Could not send sender acknowledgment email:", e?.message);
    }
  }

  return {
    success: true,
    refId,
    timestamp: formattedDate,
    isTest,
    userAckSent,
  };
}

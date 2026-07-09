# Promptly Landing Page

Dark-mode React and Tailwind landing page for Promptly, a pre-launch web and mobile app that will send students instant push notifications when internships and job opportunities are published.

## Run Locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Waitlist Google Sheets Setup

The waitlist modal posts to `/api/waitlist`, which forwards submissions to a Google Apps Script webhook.

Add this environment variable in Vercel:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

The Google Sheet should have columns for `submittedAt`, `firstName`, `lastName`, `email`, and `source`.

Use this Apps Script for the sheet webhook. It saves the signup and sends a professional confirmation email:

```js
const WAITLIST_EMAIL_SUBJECT = "You're In! Welcome to the Promptly Priority Waitlist";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents || "{}");

    const submittedAt = data.submittedAt || new Date().toISOString();
    const firstName = String(data.firstName || "").trim();
    const lastName = String(data.lastName || "").trim();
    const email = String(data.email || "").trim();
    const source = data.source || "Promptly landing page";

    sheet.appendRow([
      submittedAt,
      firstName,
      lastName,
      email,
      source,
    ]);

    sendWaitlistConfirmationEmail(firstName, email);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function sendWaitlistConfirmationEmail(firstName, email) {
  if (!email) return;

  const displayName = firstName || "there";
  const safeName = escapeHtml(displayName);

  const plainBody = [
    `Hi ${displayName},`,
    "",
    "Thanks for signing up!",
    "",
    "You're officially on our Priority Waitlist, which means you'll be among the first to hear about new updates, early access opportunities, and our official launch.",
    "",
    "We're working hard behind the scenes to build something we're genuinely excited to share, and we're glad you're joining us from the very beginning.",
    "",
    "As a member of the Priority Waitlist, you'll receive:",
    "",
    "- Early access before the public launch",
    "- Product updates and development news",
    "- Opportunities to provide feedback and help shape the platform",
    "- Any exclusive launch announcements or perks we offer",
    "",
    "We appreciate your support and can't wait to share what we've been building. Thanks for believing in us from day one.",
    "",
    "See you soon,",
    "",
    "The Founding Team",
    "Cameron Hicks",
    "Tremayne Russell",
    "Marley Stewart",
  ].join("\n");

  const htmlBody = `
    <div style="margin:0;padding:0;background:#0f111a;font-family:Inter,Arial,sans-serif;color:#f8fbff;">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
        <div style="border:1px solid rgba(255,255,255,0.14);border-radius:24px;background:linear-gradient(135deg,#1c2030,#171927 55%,#221a42);padding:32px;">
          <div style="font-size:13px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#9b83ff;margin-bottom:14px;">
            Promptly Priority Waitlist
          </div>
          <h1 style="margin:0 0 20px;font-size:32px;line-height:1.1;color:#ffffff;">
            You're in.
          </h1>
          <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#dce3f2;">Hi ${safeName},</p>
          <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#dce3f2;">
            Thanks for signing up! You're officially on our Priority Waitlist, which means you'll be among the first to hear about new updates, early access opportunities, and our official launch.
          </p>
          <p style="margin:0 0 22px;font-size:16px;line-height:1.7;color:#dce3f2;">
            We're working hard behind the scenes to build something we're genuinely excited to share, and we're glad you're joining us from the very beginning.
          </p>
          <div style="margin:24px 0;padding:20px;border-radius:18px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);">
            <p style="margin:0 0 12px;font-size:15px;font-weight:800;color:#ffffff;">As a member of the Priority Waitlist, you'll receive:</p>
            <ul style="margin:0;padding-left:20px;color:#cfd7e6;font-size:15px;line-height:1.8;">
              <li>Early access before the public launch</li>
              <li>Product updates and development news</li>
              <li>Opportunities to provide feedback and help shape the platform</li>
              <li>Any exclusive launch announcements or perks we offer</li>
            </ul>
          </div>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#dce3f2;">
            We appreciate your support and can't wait to share what we've been building. Thanks for believing in us from day one.
          </p>
          <p style="margin:0;font-size:16px;line-height:1.7;color:#dce3f2;">
            See you soon,<br><br>
            <strong style="color:#ffffff;">The Founding Team</strong><br>
            Cameron Hicks<br>
            Tremayne Russell<br>
            Marley Stewart
          </p>
        </div>
      </div>
    </div>
  `;

  GmailApp.sendEmail(email, WAITLIST_EMAIL_SUBJECT, plainBody, {
    htmlBody,
    name: "Promptly",
    replyTo: "help.promptly@gmail.com",
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Deploy the script as a Web App from `help.promptly@gmail.com`, set access to `Anyone`, copy the `/exec` URL, and save it in Vercel as `GOOGLE_SHEETS_WEBHOOK_URL`. The first time the script runs, Google may ask you to authorize Gmail access.

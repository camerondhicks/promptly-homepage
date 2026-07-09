var WAITLIST_EMAIL_SUBJECT = "You're In! Welcome to the Promptly Priority Waitlist";

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents || "{}");

    var submittedAt = data.submittedAt || new Date().toISOString();
    var firstName = String(data.firstName || "").trim();
    var lastName = String(data.lastName || "").trim();
    var email = String(data.email || "").trim();
    var source = data.source || "Promptly landing page";

    sheet.appendRow([
      submittedAt,
      firstName,
      lastName,
      email,
      source
    ]);

    sendWaitlistConfirmationEmail(firstName, email);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function testWaitlistConfirmationEmail() {
  sendWaitlistConfirmationEmail("Cameron", "help.promptly@gmail.com");
}

function sendWaitlistConfirmationEmail(firstName, email) {
  if (!email) {
    return;
  }

  var displayName = firstName || "there";
  var safeName = escapeHtml(displayName);

  var plainBody = [
    "Hi " + displayName + ",",
    "",
    "Thanks for signing up!",
    "",
    "You are officially on our Priority Waitlist, which means you will be among the first to hear about new updates, early access opportunities, and our official launch.",
    "",
    "We are working hard behind the scenes to build something we are genuinely excited to share, and we are glad you are joining us from the very beginning.",
    "",
    "As a member of the Priority Waitlist, you will receive:",
    "",
    "- Early access before the public launch",
    "- Product updates and development news",
    "- Opportunities to provide feedback and help shape the platform",
    "- Any exclusive launch announcements or perks we offer",
    "",
    "We appreciate your support and cannot wait to share what we have been building. Thanks for believing in us from day one.",
    "",
    "See you soon,",
    "",
    "The Founding Team",
    "Cameron Hicks",
    "Tremayne Russell",
    "Marley Stewart"
  ].join("\n");

  var htmlBody = [
    "<div style='margin:0;padding:0;background:#0f111a;font-family:Arial,sans-serif;color:#f8fbff;'>",
    "<div style='max-width:640px;margin:0 auto;padding:32px 20px;'>",
    "<div style='border:1px solid rgba(255,255,255,0.14);border-radius:24px;background:#171927;padding:32px;'>",
    "<div style='font-size:13px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#9b83ff;margin-bottom:14px;'>Promptly Priority Waitlist</div>",
    "<h1 style='margin:0 0 20px;font-size:32px;line-height:1.1;color:#ffffff;'>You are in.</h1>",
    "<p style='margin:0 0 18px;font-size:16px;line-height:1.7;color:#dce3f2;'>Hi " + safeName + ",</p>",
    "<p style='margin:0 0 18px;font-size:16px;line-height:1.7;color:#dce3f2;'>Thanks for signing up! You are officially on our Priority Waitlist, which means you will be among the first to hear about new updates, early access opportunities, and our official launch.</p>",
    "<p style='margin:0 0 22px;font-size:16px;line-height:1.7;color:#dce3f2;'>We are working hard behind the scenes to build something we are genuinely excited to share, and we are glad you are joining us from the very beginning.</p>",
    "<div style='margin:24px 0;padding:20px;border-radius:18px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);'>",
    "<p style='margin:0 0 12px;font-size:15px;font-weight:800;color:#ffffff;'>As a member of the Priority Waitlist, you will receive:</p>",
    "<ul style='margin:0;padding-left:20px;color:#cfd7e6;font-size:15px;line-height:1.8;'>",
    "<li>Early access before the public launch</li>",
    "<li>Product updates and development news</li>",
    "<li>Opportunities to provide feedback and help shape the platform</li>",
    "<li>Any exclusive launch announcements or perks we offer</li>",
    "</ul>",
    "</div>",
    "<p style='margin:0 0 24px;font-size:16px;line-height:1.7;color:#dce3f2;'>We appreciate your support and cannot wait to share what we have been building. Thanks for believing in us from day one.</p>",
    "<p style='margin:0;font-size:16px;line-height:1.7;color:#dce3f2;'>See you soon,<br><br><strong style='color:#ffffff;'>The Founding Team</strong><br>Cameron Hicks<br>Tremayne Russell<br>Marley Stewart</p>",
    "</div>",
    "</div>",
    "</div>"
  ].join("");

  MailApp.sendEmail(email, WAITLIST_EMAIL_SUBJECT, plainBody, {
    htmlBody: htmlBody,
    name: "Promptly",
    replyTo: "help.promptly@gmail.com"
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

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

The Google Sheet should have columns for `submittedAt`, `firstName`, `lastName`, `email`, `phone`, and `source`.

Use this Apps Script for the sheet webhook:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.source,
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Deploy the script as a Web App, set access to `Anyone`, copy the `/exec` URL, and save it in Vercel as `GOOGLE_SHEETS_WEBHOOK_URL`.

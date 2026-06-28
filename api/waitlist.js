export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return response.status(503).json({
      error: "The waitlist is not connected to Google Sheets yet.",
    });
  }

  const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
  const firstName = String(body.firstName || "").trim();
  const lastName = String(body.lastName || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();

  if (!firstName || !lastName || !email || !phone) {
    return response.status(400).json({ error: "Please complete every field." });
  }

  const sheetResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      source: "Promptly landing page",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!sheetResponse.ok) {
    return response.status(502).json({
      error: "Google Sheets did not accept the submission.",
    });
  }

  return response.status(200).json({ ok: true });
}

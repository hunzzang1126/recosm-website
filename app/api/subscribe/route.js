// Waitlist signup — proxies to the RE:COSM Waitlist Google Form (owned by young.an@recosm.co).
// Server-side call, so the browser never sees the form endpoint and CORS is a non-issue.

const FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf1qyF7gEFvxGTmaikqxC4G0Qh4auhFokr_noBfBT3Qlz6MCA/formResponse";
const EMAIL_ENTRY = "entry.459132320";

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot — bots that fill every field get a fake success
  if (payload.website) {
    return Response.json({ ok: true });
  }

  const email = String(payload.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const body = new URLSearchParams({ [EMAIL_ENTRY]: email });
    const res = await fetch(FORM_RESPONSE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!res.ok) {
      return Response.json({ ok: false, error: "upstream" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}

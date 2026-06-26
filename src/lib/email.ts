import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  propertyAddress: string;
  propertyType: string;
  numberOfUnits: string;
  currentlyTenanted: string;
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    throw new Error("Email service is not configured");
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New Rent-Ready Review Request</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Property Address/City:</strong> ${data.propertyAddress}</p>
    <p><strong>Property Type:</strong> ${data.propertyType}</p>
    <p><strong>Number of Units:</strong> ${data.numberOfUnits}</p>
    <p><strong>Currently Tenanted:</strong> ${data.currentlyTenanted}</p>
  `;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: data.email,
    subject: `Rent-Ready Review Request from ${data.name}`,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}

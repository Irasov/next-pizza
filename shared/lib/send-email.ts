import { Resend } from 'resend';
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (to: string, subject: string, template: React.ReactNode) => {

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject,
    text: '',
    react: template,
  });

  if (error) {
    throw error;
  }

  return data;
};
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Hamster-russe.com <onboarding@resend.dev>', // Sera mis à jour après vérification du domaine
            to: [process.env.CONTACT_EMAIL || 'votre@email.com'], // Email de réception
            subject: `🐹 Nouvelle demande d'adoption de ${name}`,
            html: `
        <h2>Nouvelle demande d'adoption</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

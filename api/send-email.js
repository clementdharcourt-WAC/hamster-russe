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
        const fromAddress = process.env.VERIFIED_DOMAIN_EMAIL || 'onboarding@resend.dev';
        const toAddress = process.env.CONTACT_EMAIL || 'votre@email.com';

        console.log(`[DEBUG] Tentative d'envoi d'email :`);
        console.log(`- De : ${fromAddress}`);
        console.log(`- Vers : ${toAddress}`);
        console.log(`- Nom adoptant : ${name}`);

        const { data, error } = await resend.emails.send({
            from: `Hamster-russe.com <${fromAddress}>`,
            to: [toAddress],
            subject: `🐹 Nouvelle demande d'adoption de ${name}`,
            html: `
        <h2>Nouvelle demande d'adoption</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        if (error) {
            console.error('[ERREUR RESEND] Objet d\'erreur renvoyé par l\'API :', JSON.stringify(error, null, 2));
            return res.status(400).json({ error: error.message, detail: error });
        }

        console.log('[SUCCÈS] Email envoyé. ID Resend :', data.id);
        return res.status(200).json({ success: true, id: data.id });
    } catch (error) {
        console.error('[ERREUR CRITIQUE] Exception lors de l\'exécution du handler :', error);
        return res.status(500).json({ error: error.message, stack: error.stack });
    }
}

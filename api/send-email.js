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
        const toBreeder = process.env.CONTACT_EMAIL || 'votre@email.com';
        const toUser = email; // L'email saisi dans le formulaire

        console.log(`[DEBUG] Tentative d'envoi des emails :`);
        console.log(`- De : ${fromAddress}`);
        console.log(`- Vers Éleveur : ${toBreeder}`);
        console.log(`- Vers Adoptant : ${toUser}`);

        // 1. Email pour l'éleveur (Notification)
        const breederEmail = await resend.emails.send({
            from: `Hamster-russe.com <${fromAddress}>`,
            to: [toBreeder],
            subject: `🐹 Nouvelle demande d'adoption de ${name}`,
            html: `
                <h2>Nouvelle demande d'adoption</h2>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Message :</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (breederEmail.error) {
            console.error('[ERREUR BREEDER] :', breederEmail.error);
            return res.status(400).json({ error: breederEmail.error.message });
        }

        // 2. Email pour l'adoptant (Confirmation)
        const userEmail = await resend.emails.send({
            from: `Hamster-russe.com <${fromAddress}>`,
            to: [toUser],
            subject: `Merci pour votre demande d'adoption - Hamster-russe.com`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #d97706;">Bonjour ${name},</h2>
                    <p>Merci beaucoup pour votre message ! Nous avons bien reçu votre demande d'adoption pour l'un de nos petits hamsters russes.</p>
                    <p>Nous allons étudier votre demande et nous reviendrons vers vous très rapidement (généralement sous 24h) pour organiser une rencontre.</p>
                    
                    <div style="background-color: #fffbeb; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <h3 style="margin-top: 0;">Récapitulatif de votre demande :</h3>
                        <p><strong>Votre message :</strong><br>${message.replace(/\n/g, '<br>')}</p>
                    </div>

                    <p style="margin-top: 20px;">À très bientôt,<br><strong>La famille d'Harcourt</strong><br><em>Elevage familial de Hamsters Russes à Puteaux</em></p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #666;">Ceci est un message automatique, vous pouvez nous répondre directement sur cet email si besoin.</p>
                </div>
            `,
        });

        console.log('[SUCCÈS] Emails envoyés.');
        return res.status(200).json({ success: true });

    } catch (error) {
        console.error('[ERREUR CRITIQUE] :', error);
        return res.status(500).json({ error: error.message });
    }
}

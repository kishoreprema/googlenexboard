const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Missing customer Name or Email Address' });
    }

    console.log(`[License Lead] Name: ${name}, Email: ${email}`);

    // Create Transporter using SMTP credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kishoreprema2001@gmail.com',
            pass: 'wkrh mbwk rmam sqdq'
        }
    });

    const mailOptions = {
        from: '"NexBoard License Request" <kishoreprema2001@gmail.com>',
        to: 'kishoreprema2001@gmail.com',
        subject: '🚀 New NexBoard Showcase License Request!',
        html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 550px; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin: 20px auto;">
                <div style="background: linear-gradient(135deg, #4F46E5, #8B5CF6); color: white; padding: 24px 32px; text-align: center;">
                    <h2 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">New License Request!</h2>
                    <p style="margin: 6px 0 0; opacity: 0.85; font-size: 14px;">NexBoard Self-Hosted Perpetual License Trial</p>
                </div>
                <div style="padding: 32px; background: #ffffff; color: #1e293b; font-size: 14px; line-height: 1.6;">
                    <h3 style="margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; color: #0f172a; font-size: 15px;">Customer Contact Information</h3>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 600;">Full Name:</td>
                            <td style="color: #0f172a; font-weight: 500;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email Address:</td>
                            <td style="color: #0f172a; font-weight: 500;"><a href="mailto:${email}" style="color: #4F46E5; text-decoration: none;">${email}</a></td>
                        </tr>
                    </table>

                    <h3 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; color: #0f172a; font-size: 15px;">Message / Requirements</h3>
                    <div style="background: #f8fafc; border-left: 4px solid #4F46E5; padding: 16px; border-radius: 4px; color: #334155; margin-top: 12px; font-style: italic;">
                        "${message || 'No additional requirements provided.'}"
                    </div>
                </div>
                <div style="background: #f8fafc; padding: 18px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
                    This is an automated sales alert generated from your Vercel Showcase site.
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Mail dispatch failed:', err.message);
        res.status(500).json({ error: 'Failed to send lead email', details: err.message });
    }
};

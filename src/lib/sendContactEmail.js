"use server";

import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";

const sendContactEmail = async (email, message) => {
  const cleanMessage = sanitizeHtml(message, {
    allowedTags: [],
    allowedAttributes: {},
  });

  const escapedMessage = cleanMessage
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: "misterfoxydev@gmail.com",
      subject: "Nouveau message de contact Portfolio",
      text: `De: ${email}\n\nMessage: ${escapedMessage}\n\nCeci est un message automatique envoyé depuis le formulaire de contact Portfolio. Merci de ne pas y répondre directement.`,
      html: `
          <h2>Nouveau message de contact Portfolio</h2>
          <p><strong>De:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${escapedMessage}</p> <!-- Utilisation du message désinfecté -->
          <hr>
          <p><small>Ceci est un message automatique envoyé depuis le formulaire de contact Portfolio. Merci de ne pas y répondre directement.</small></p>
        `,
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "high",
        "X-Mailer": "Portfolio Contact Form",
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    throw new Error("Erreur lors de l'envoi de l'email");
  }
};

export default sendContactEmail;

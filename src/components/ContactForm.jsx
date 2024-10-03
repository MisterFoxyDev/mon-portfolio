"use client";

import { useState } from "react";
import { ReactTyped } from "react-typed";
import toast from "react-hot-toast";
import { MdOutgoingMail } from "react-icons/md";

import sendContactEmail from "@/lib/sendContactEmail";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.promise(sendContactEmail(email, message), {
      loading: "Envoi en cours...",
      success: () => {
        setEmail("");
        setMessage("");
        return "Message envoyé avec succès !";
      },
      error: "Erreur lors de l'envoi du message. Veuillez réessayer.",
    });
  };

  return (
    <div className="border-corners container flex h-[70dvh] w-[80dvw] flex-col items-center justify-start">
      <h1 className="mb-20 inline-block font-serif text-2xl font-medium">
        <ReactTyped strings={["Contactez-moi"]} typeSpeed={40} />
      </h1>
      <form className="pb-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Adresse mail :</label>
          <input
            className="m-4 w-full rounded-lg bg-zinc-300 p-4"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Votre message :</label>
          <textarea
            className="m-4 w-full rounded-lg bg-zinc-300 p-4"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="w-auto rounded-2xl bg-blue-500 px-8 py-3 font-semibold text-zinc-900 hover:bg-blue-600 dark:bg-blue-700 dark:text-zinc-300 hover:dark:bg-blue-500"
            type="submit"
          >
            Envoyer{" "}
            <MdOutgoingMail className="inline-block align-sub text-2xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

"use client";

import React from "react";
import { Chrono } from "react-chrono";

const ParcoursPage = () => {
  const items = [
    {
      date: "29 Septembre 1985",
      cardTitle: "Naissance",
      url: "",
      cardSubtitle: "Je viens de naître",
      cardDetailedText: "Je ne sais pas encore programmer",
    },
    {
      title: "2001",
      cardTitle: "Lycée",
      url: "",
      cardSubtitle: "Je suis en 1ère Scientifique",
      cardDetailedText:
        "J'apprends les rudiments du BASIC sur ma calculatrice graphique. Je m'amuse à créer des petits programmes ludiques",
    },
    {
      title: "2022",
      cardTitle: "Début de l'apprentissage",
      url: "",
      cardSubtitle: "Je me trouve une nouvelle passion",
      cardDetailedText:
        "J'apprends les bases du développement web avec l'application MIMO. Je fais mes premiers pas dans les technologies HTML, CSS, JavaScript, Python, SQL",
    },
    {
      title: "Début 2024",
      cardTitle: "Début de la formation",
      url: "",
      cardSubtitle:
        "Je commence ma formation de développeur web Fullstack avec la plateforme OpenClassrooms",
      cardDetailedText:
        "Je bénéficie d'une formation complète avec un accès à des cours variés et des projets stimulants, et de l'accompagnement personnalisé de la part d'un professionnel : mon mentor",
    },
    {
      title: "2024",
      cardTitle: "Découverte des cours Udemy",
      url: "",
      cardSubtitle: "",
      cardDetailedText: "",
    },
  ];

  return (
    <section className="flex justify-center">
      <div
        className="flex justify-center pt-40"
        style={{ width: "80dvw", height: "80dvh" }}
      >
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          slideShow={true}
          slideItemDuration={2000}
          disableToolbar={true}
        />
      </div>
    </section>
  );
};

export default ParcoursPage;

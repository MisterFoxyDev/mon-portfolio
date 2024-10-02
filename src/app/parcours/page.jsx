"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Paper, Typography } from "@mui/material";

const ParcoursPage = () => {
  const items = [
    {
      date: "29 Septembre 1985",
      title: "Naissance",
      subtitle: "Je viens de naître",
      detailedText: "Je ne sais pas encore programmer",
    },
    {
      date: "2001",
      title: "Lycée",
      subtitle: "Je suis en 1ère Scientifique",
      detailedText:
        "J'apprends les rudiments du BASIC sur ma calculatrice graphique. Je m'amuse à créer des petits programmes ludiques",
    },
    {
      date: "2022",
      title: "Début de l'apprentissage",
      subtitle: "Je me trouve une nouvelle passion",
      detailedText:
        "J'apprends les bases du développement web avec l'application MIMO. Je fais mes premiers pas dans les technologies HTML, CSS, JavaScript, Python, SQL",
    },
    {
      date: "Début 2024",
      title: "Début de la formation",
      subtitle:
        "Je commence ma formation de développeur web Fullstack avec la plateforme OpenClassrooms",
      detailedText:
        "Je bénéficie d'une formation complète avec un accès à des cours variés et des projets stimulants, et de l'accompagnement personnalisé de la part d'un professionnel : mon mentor",
    },
    {
      date: "2024",
      title: "Découverte des cours Udemy",
      subtitle: "Une seconde formation",
      detailedText:
        "Je renforce mes compétences à l'aide des excellents cours de Jonas Schmedtmann (jonas.io), notamment en abordant des concepts avancés, comme le fonctionnement interne de JavaScript",
    },
  ];

  return (
    <section className="flex justify-center">
      <div className="flex w-[60dvw] justify-center pt-40">
        <Timeline position="alternate">
          {items.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography
                  className="text-lg text-zinc-900 dark:text-zinc-300"
                  variant="body2"
                >
                  {item.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {index < items.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} style={{ padding: "6px 16px" }}>
                  <Typography className="text-xl" variant="h6" component="h1">
                    {item.title}
                  </Typography>
                  <Typography className="font-semibold">
                    {item.subtitle}
                  </Typography>
                  <Typography sx={{ marginTop: "1.5rem" }}>
                    {item.detailedText}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default ParcoursPage;

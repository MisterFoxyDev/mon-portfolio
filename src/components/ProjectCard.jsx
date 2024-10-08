"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

import { Button } from "./ui/button";

const ProjectCard = ({
  title,
  description,
  technologies,
  staticImageUrl,
  animatedImageUrl,
  siteUrl,
  animationDirection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (animatedImageUrl) {
      const img = document.createElement("img");
      img.src = animatedImageUrl;
      img.onload = () => {
        console.log("Image pré-chargée");
      };
      img.onerror = () => {
        console.error("Erreur lors du chargement de l'image");
      };

      document.body.appendChild(img);

      return () => {
        document.body.removeChild(img);
      };
    }
  }, [animatedImageUrl]);

  const variants = {
    hidden: {
      opacity: 0,
      x:
        animationDirection === "left"
          ? -100
          : animationDirection === "right"
          ? 100
          : 0,
      y: animationDirection === "bottom" ? 100 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.2 }}
      variants={variants}
      whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
      className="relative m-4 h-fit w-80 max-w-sm transform overflow-hidden rounded-lg border-2 border-zinc-600 shadow-[4px_4px_15px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:shadow-[10px_10px_20px_rgba(9,9,9,0.6)] dark:border-zinc-300 dark:shadow-none dark:shadow-gray-800/60"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-gradient-bg bg-gradient-to-r from-violet-800 via-blue-800 to-violet-600 bg-[length:400%_400%] opacity-60 dark:opacity-80"></div>
      <div className="relative z-10 p-4">
        <div className="relative">
          <Image
            src={staticImageUrl}
            alt={title}
            width={640}
            height={640}
            loading="lazy"
            className={`mb-2 h-48 w-full rounded-lg object-fill ${
              animatedImageUrl ? "hover:opacity-0" : ""
            }`}
          />
          {animatedImageUrl && (
            <Image
              src={animatedImageUrl}
              alt={title}
              width={640}
              height={640}
              className="absolute left-0 top-0 mb-2 h-48 w-full rounded-lg object-fill opacity-0 hover:opacity-100"
              unoptimized
            />
          )}
        </div>
        <h1 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-300">
          {title}
        </h1>
        <p className="mb-2 text-zinc-800 dark:text-zinc-300">
          {description.resume}
        </p>
        <p className="mb-2 text-sm text-zinc-900 dark:text-zinc-300">
          <span className="text-lg font-semibold">
            Technologies principales :
          </span>{" "}
          {technologies.principales.join(", ")}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-2 font-medium text-blue-700 hover:underline focus:outline-none dark:text-blue-300"
        >
          {isOpen ? (
            <>
              Moins d&apos;infos <MdKeyboardArrowUp className="inline-block" />
            </>
          ) : (
            <>
              Plus d&apos;infos <MdKeyboardArrowDown className="inline-block" />
            </>
          )}
        </button>
        {isOpen && (
          <div className="mt-2">
            <p className="mb-2 text-base text-zinc-900 dark:text-zinc-300">
              {description.complete}
            </p>
            {technologies.secondaires.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-200">
                  Technologies secondaires:
                </h3>
                <ul className="mb-4 list-inside list-disc">
                  {technologies.secondaires.map((lib, index) => (
                    <li
                      key={index}
                      className="text-zinc-900 dark:text-zinc-200"
                    >
                      {lib}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center">
          {siteUrl ? (
            <Link
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex max-w-28 items-center justify-center rounded-xl bg-blue-500 px-4 py-2 font-bold text-zinc-900 transition duration-300 hover:bg-blue-700 dark:bg-blue-700 dark:text-zinc-300 hover:dark:bg-blue-500"
            >
              Visiter {<GoProjectSymlink className="ml-2" />}
            </Link>
          ) : (
            <Button disabled={true}>En construction</Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

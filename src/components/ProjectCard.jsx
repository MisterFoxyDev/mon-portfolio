"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  siteUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative m-4 h-fit w-80 max-w-sm transform overflow-hidden rounded-lg border-2 border-zinc-600 shadow-[4px_4px_15px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105 hover:shadow-[10px_10px_20px_rgba(9,9,9,0.6)] dark:border-zinc-300 dark:shadow-none dark:shadow-gray-800/60">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full animate-gradient-bg bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:400%_400%] opacity-70"></div>
      <div className="relative z-10 p-4">
        <Image
          src={imageUrl}
          alt={title}
          width={640}
          height={640}
          className="mb-2 h-48 w-full rounded-lg object-cover"
        />
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-300">
          {title}
        </h1>
        <p className="mb-2">{description.resume}</p>
        <p className="mb-2 text-sm text-zinc-900 dark:text-zinc-300">
          Technologies: {technologies.principales.join(", ")}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-2 text-blue-700 hover:underline focus:outline-none dark:text-blue-300"
        >
          {isOpen ? "Moins d'infos" : "Plus d'infos"}
        </button>
        {isOpen && (
          <div className="mt-2">
            <p className="mb-2 text-base text-zinc-900 dark:text-zinc-300">
              {description.complete}
            </p>
            {technologies.librairies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold">Librairies:</h3>
                <ul className="mb-4 list-inside list-disc">
                  {technologies.librairies.map((lib, index) => (
                    <li
                      key={index}
                      className="text-zinc-600 dark:text-zinc-200"
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
          <Link
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex max-w-28 items-center justify-center rounded-xl bg-blue-500 px-4 py-2 font-bold text-zinc-900 transition duration-300 hover:bg-blue-700 dark:bg-blue-700 dark:text-zinc-300 hover:dark:bg-blue-500"
          >
            Visiter {<HiOutlineExternalLink className="ml-2" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

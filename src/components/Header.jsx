import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-[100dvw] border-b border-zinc-200 bg-zinc-500/30 py-6 shadow-lg shadow-gray-500/60 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/30 dark:shadow-gray-800/60">
      <nav className="container flex items-center justify-between px-3 max-[460px]:px-2">
        <div>
          <Link
            href="/"
            className="px-2 font-serif text-xl font-bold max-[460px]:px-1 sm:text-2xl"
          >
            HT
          </Link>
        </div>

        <ul className="flex items-center justify-between gap-1 px-2 text-sm sm:gap-10 sm:px-4">
          <li className="flex justify-center rounded-lg bg-zinc-400/70 hover:bg-zinc-400 dark:bg-zinc-500/70 dark:hover:bg-zinc-500">
            <Link
              className="px-3 text-base font-medium max-[465px]:px-2 sm:text-lg"
              href="/#projets"
            >
              Projets
            </Link>
          </li>
          <li className="flex justify-center rounded-lg bg-zinc-400/70 hover:bg-zinc-400 dark:bg-zinc-500/70 dark:hover:bg-zinc-500">
            <Link
              className="px-3 text-base font-medium max-[465px]:px-2 sm:text-lg"
              href="/#competences"
            >
              Compétences
            </Link>
          </li>
          <li className="flex justify-center rounded-lg bg-zinc-400/70 hover:bg-zinc-400 dark:bg-zinc-500/70 dark:hover:bg-zinc-500">
            <Link
              className="px-3 text-base font-medium max-[465px]:px-2 sm:text-lg"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;

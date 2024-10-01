import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-zinc-500/30 py-6 shadow-lg shadow-gray-500/60 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/30 dark:shadow-gray-800/60">
      <nav className="container flex max-w-6xl items-center justify-between px-3 max-[460px]:px-1">
        <div>
          <Link
            href="/"
            className="px-2 font-serif text-base font-bold max-[460px]:px-1 sm:text-2xl"
          >
            HT
          </Link>
        </div>

        <ul className="flex items-center px-3 text-sm sm:gap-10">
          <li className="flex justify-center">
            <Link
              className="px-3 text-xs font-semibold max-[465px]:px-2 sm:text-lg"
              href="#projets"
            >
              Projets
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="px-3 text-xs font-semibold max-[465px]:px-2 sm:text-lg"
              href="#competences"
            >
              Compétences
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              className="px-3 text-xs font-semibold max-[465px]:px-2 sm:text-lg"
              href="#"
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

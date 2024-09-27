import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-zinc-500/30 py-6 shadow-lg shadow-gray-500/60 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/30 dark:shadow-gray-800/60">
      <nav className="container flex max-w-6xl items-center justify-between px-3">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            HT
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-sm sm:gap-10">
          <li>
            <Button variant="ghost" size="sm">
              <Link className="text-lg font-semibold" href="#projets">
                Projets
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="sm">
              <Link className="text-lg font-semibold" href="#">
                Compétences
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="sm">
              <Link className="text-lg font-semibold" href="#">
                Contact
              </Link>
            </Button>
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

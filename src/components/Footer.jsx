import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="flex items-center justify-center">
          <p className="px-2 text-center text-sm leading-5">
            &copy; {new Date().getFullYear()}. Tous droits réservés.{" "}
          </p>
          <Link
            href="https://github.com/MisterFoxyDev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="text-xl text-black dark:text-gray-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

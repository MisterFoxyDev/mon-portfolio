const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="flex items-center justify-center">
          <p className="text-center text-sm leading-5">
            &copy; {new Date().getFullYear()}. Tous droits réservés.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

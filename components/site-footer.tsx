const footerLinks = ["Privacy Policy", "Terms of Service", "Affiliate Disclosure"];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>Copyright &copy; 2026 DC LLC. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="transition-all duration-300 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

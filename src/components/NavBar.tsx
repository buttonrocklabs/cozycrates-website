import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const aboutLinks = [
  { to: "/about-lily", label: "About Lily, Founder" },
  { to: "/our-team", label: "Our Team" },
  { to: "/our-crates", label: "Our Crates" },
  { to: "/our-mission", label: "Our Mission" },
];

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/our-response", label: "Our Response" },
  { to: "/media", label: "Media" },
  { to: "/how-to-help", label: "How to Help", highlight: true },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isAboutActive = aboutLinks.some((l) => isActive(l.to));

  return (
    <header className="bg-cc-black sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Cozy Crates" className="h-12 w-auto" />
          <span className="font-heading text-xl font-bold tracking-wide text-white">
            Cozy Crates
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-cc-green"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Home
          </Link>

          {/* About Us dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                isAboutActive
                  ? "text-cc-green"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              About Us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-full w-52 rounded-b-md bg-cc-dark shadow-lg">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(link.to)
                        ? "text-cc-green"
                        : "text-gray-300 hover:bg-cc-gray-dark hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/our-response"
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              isActive("/our-response")
                ? "text-cc-green"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Our Response
          </Link>
          <Link
            to="/media"
            className={`px-3 py-2 text-sm font-medium transition-colors ${
              isActive("/media")
                ? "text-cc-green"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Media
          </Link>
          <Link
            to="/how-to-help"
            className="ml-2 rounded bg-cc-green px-4 py-2 text-sm font-bold text-cc-black transition-colors hover:bg-cc-green-dark"
          >
            HOW TO HELP
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-cc-gray-dark bg-cc-black md:hidden">
          {mainLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-6 py-3 text-sm font-medium ${
                link.highlight
                  ? "bg-cc-green text-cc-black font-bold"
                  : isActive(link.to)
                    ? "text-cc-green"
                    : "text-gray-300"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.highlight ? "HOW TO HELP" : link.label}
            </Link>
          ))}
          <div className="border-t border-cc-gray-dark px-6 py-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            About Us
          </div>
          {aboutLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-8 py-2.5 text-sm ${
                isActive(link.to) ? "text-cc-green" : "text-gray-400"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

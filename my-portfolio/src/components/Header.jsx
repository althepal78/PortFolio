import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.documentElement.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.documentElement.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.documentElement.classList.remove("overflow-y-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" flex justify-between sticky top-0 items-center px-6  py-4 bg-black z-50">
      <Link
        to="/"
        className={`site-logo relative ${isMenuOpen ? "opacity-0" : "z-10"}`}
      >
        <img
          src="/logo.jpg"
          alt="Logo"
          className="logo-image rounded-full h-24 w-24 border-white border-dotted border-3"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktop-nav hidden md:flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700"
              : "nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700"
              : "nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700"
              : "nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700"
              : "nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500"
          }
        >
          Contact
        </NavLink>

        <SocialLinks />
      </nav>

      {/* Mobile hamburger button with higher z-index */}
      <button
        onClick={toggleMenu}
        className="hamburger-button md:hidden text-white text-3xl z-50 relative"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Full-screen Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden z-40 ${
          isMenuOpen
            ? "menu-open opacity-100 visible"
            : "menu-closed opacity-0 invisible"
        }`}
      >
        {/* Centered Logo with 75% size - reduced bottom margin */}
        <div className="mobile-logo mb-4">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="mobile-logo-image rounded-full border-white border-dotted border-3 scale-75"
          />
        </div>

        {/* Navigation Links */}
        <nav className="mobile-nav flex flex-col items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700 py-4"
                : "mobile-nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500 py-4"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700 py-4"
                : "mobile-nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500 py-4"
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700 py-4"
                : "mobile-nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500 py-4"
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link-active text-[var(--knicks-orange)] text-xl hover:text-amber-700 py-4"
                : "mobile-nav-link text-[var(--knicks-silver)] text-xl hover:text-gray-500 py-4"
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </nav>

        {/* Social icons at the bottom */}
        <div className="mobile-social-links mt-10">
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;

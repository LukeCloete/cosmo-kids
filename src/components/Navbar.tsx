"use client";

import { Button } from "./ui/button";
import LOGO from "/public/cosmo-kids-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    dropdown: [
      { name: "About Cosmo Kids", href: "/about-cosmo-kids" },
      { name: "How We Started", href: "/how-we-started" },
      { name: "What We Do", href: "/what-we-do" },
      { name: "Activities", href: "/activities" },
    ],
  },
  {
    name: "Classes",
    href: "#",
    dropdown: [
      { name: "Bouncy Bunnies (6-12m)", href: "/bouncy-bunnies" },
      { name: "Jolly Giraffe (1-2y)", href: "/jolly-giraffe" },
      { name: "Smart Lions (2-3y)", href: "/smart-lions" },
      { name: "Clever Cats (3-4y)", href: "/clever-cats" },
      { name: "Wise Mice (4-5y)", href: "/wise-mice" },
      { name: "Brainy Elephants (Grade 0)", href: "/brainy-elephants" },
    ],
  },
  { name: "News + Events", href: "/news-and-events" },
  { name: "Contact Us", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (linkName: string) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  return (
    <nav className="fixed top-0 z-50 px-6 py-4 w-full bg-white/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="relative text-white font-bold text-xl">
          <Link href="/">
            <Image src={LOGO} alt="Cosmo Kids Logo" className="w-40 h-auto" />
          </Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 font-semibold text-gray-700">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="hover:text-orange-500 focus:outline-none flex items-center"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-20">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="hover:text-orange-500">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold text-white">
            <Link href="/admissions">Admissions</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <Button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold text-white">
            Admissions
          </Button>
          <Button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none focus:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white/90 backdrop-blur-md shadow-inner`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <Button
                    onClick={() => toggleDropdown(link.name)}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    {link.name}
                  </Button>
                  {openDropdown === link.name && (
                    <div className="pl-6 py-2">
                      {link.dropdown.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

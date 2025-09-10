import { Button } from "./ui/button";
import LOGO from "../app/public/cosmo-kids-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 px-6 py-4 w-full bg-white/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="relative text-white font-bold text-xl">
          <Link href="/">
            <Image src={LOGO} alt="Cosmo Kids Logo" className="w-40 h-auto" />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6 font-semibold text-black">
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
            <a href="#" className="hover:text-orange-500">
              About Us
            </a>
            <a href="#" className="hover:text-orange-500">
              Classes
            </a>
            <a href="#" className="hover:text-orange-500">
              News + Events
            </a>
            <a href="#" className="hover:text-orange-500">
              Contact Us
            </a>
            <a href="#" className="hover:text-orange-500">
              Gallery
            </a>
          </div>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 rounded-full font-semibold text-white">
          Admissions
        </Button>
      </div>
    </nav>
  );
}

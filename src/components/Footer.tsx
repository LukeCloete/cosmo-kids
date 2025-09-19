import Image from "next/image";
import LOGO from "../../public/cosmo-kids-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r relative from-blue-500 to-blue-800 text-white py-16 overflow-hidden z-[0]">
      {/* Background image */}
      <div className="bg-[url('/sky-background2.png')] bg-cover bg-center h-full absolute inset-0 z-[-1] opacity-30 w-full"></div>
      <div className="max-w-7xl mx-auto px-6 z-50">
        <div className="grid md:grid-cols-4 gap-8 z-50">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src={LOGO}
                alt="Cosmo Kids Logo"
                width={512}
                height={512}
                className="w-40 h-auto"
              />
            </div>
            <p className="text-white leading-relaxed z-10">
              Cosmo Kids Namibia is a private pre-school, play-school and
              aftercare centre.
            </p>
          </div>

          <div className="z-50">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  News + Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 z-20">Apply For Classes</h4>
            <ul className="space-y-2">
              <li>
                <a href="/bouncy-bunnies" className="hover:text-orange-500">
                  Bouncy Bunnies (6-12 Months)
                </a>
              </li>
              <li>
                <a href="/jolly-giraffe" className="hover:text-orange-500">
                  Jolly Giraffes (1-2 Years)
                </a>
              </li>
              <li>
                <a href="/smart-lions" className="hover:text-orange-500">
                  Smart Lions (2-3 Years)
                </a>
              </li>
              <li>
                <a href="/clever-cats" className="hover:text-orange-500">
                  Clever Cats (3-4 Years)
                </a>
              </li>
              <li>
                <a href="/wise-mice" className="hover:text-orange-500">
                  Wise Mice (4-5 Years)
                </a>
              </li>
              <li>
                <a href="/brainy-elephants" className="hover:text-orange-500">
                  Brainy Elephants (Grade 0)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-12 pt-8 text-center text-blue-100">
          <p>
            &copy; 2025 Cosmo Kids. All rights reserved. | Privacy Policy |
            Terms of Service | Powered by BI-Dynamics
          </p>
        </div>
      </div>
    </footer>
  );
}

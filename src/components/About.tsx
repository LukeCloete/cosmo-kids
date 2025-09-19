import Image from "next/image";
import { Button } from "./ui/button";
import SECTION_IMAGE from "/public/children-cosmo2.png";

export default function About() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src={SECTION_IMAGE}
              alt="Children in Circle"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-orange-400 text-xl">
                Study, Play, and Explore
              </p>
              <h2 className="text-4xl font-bold text-gray-800">
                A Magical Place to Share,{" "}
                <span className="text-orange-500">Learn, & Grow</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Cosmo Kids, we believe every child deserves a nurturing
                environment where they can explore their creativity, build
                lasting friendships, and develop essential life skills through
                play-based learning.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our experienced educators create engaging activities that
                promote social, emotional, and cognitive development while
                ensuring every child feels valued and supported.
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 w-max">
              Read More About Us
            </Button>
          </div>
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 283.5 21.2"
          className="w-full text-blue-600 fill-current"
        >
          <path d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z" />
        </svg>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import {
  BookOpen,
  Lightbulb,
  Mic,
  Cpu,
  Star,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { GalleryOverlay } from "@/components/GalleryOverlay";
import CTA from "@/components/CTA";

const ELEPHANT_HERO_IMAGE = "/brainy-elephant.webp";

const classImages = [
  { src: "/gallery/img1.jpg", alt: "Brainy Elephants class" },
  { src: "/gallery/img2.jpg", alt: "Brainy Elephants class" },
  { src: "/gallery/img3.jpg", alt: "Brainy Elephants class" },
];

export default function BrainyElephantsPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-sky-200 to-sky-100 pt-24 pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-300 rounded-full opacity-60"></div>
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple-300 rounded-full opacity-60"></div>
        </div>

        {/* Clouds */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 283.5 21.2"
            className="w-full text-white fill-current"
          >
            <path d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Meet the <span className="text-orange-500">Brainy Elephants</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We are the “big” kids of Cosmo Kids. We are the pre-school group
              aged 5 to 6 years.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Life Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              A Day with the{" "}
              <span className="text-orange-500">Brainy Elephants</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={ELEPHANT_HERO_IMAGE}
                alt="Brainy Elephants"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Brainy & Well-Mannered
                  </h3>
                  <p className="text-gray-600">
                    We are so brainy, well mannered , we outshine all the rest.
                    We are super inquisitive and our imaginations are super
                    awake.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Cpu className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Hands-On Learning
                  </h3>
                  <p className="text-gray-600">
                    We experiment, explore, make & bake, garden and create. Our
                    works of art will make your jaw drop.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Ready for Big School
                  </h3>
                  <p className="text-gray-600">
                    We are excited to learn new things and by the end of the
                    year when we graduate, we&apos;ll be so so ready for big
                    school.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-500">Fun Activities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work very hard each day, but we never forget to play. We have
              workbooks and art books, we spell and tell stories we sing and
              rhyme and play and we&apos;re certainly not shy to perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden p-8 text-center space-y-4">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Work & Art Books
              </h3>
              <p className="text-gray-600">
                We have workbooks and art books to challenge our minds and
                express our creativity.
              </p>
            </div>

            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden p-8 text-center space-y-4">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Spell & Tell Stories
              </h3>
              <p className="text-gray-600">
                We spell and tell stories, sing and rhyme, and we&apos;re not
                shy to perform.
              </p>
            </div>

            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden p-8 text-center space-y-4">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Play & Perform
              </h3>
              <p className="text-gray-600">
                We work hard, but we also love to play and perform, showing off
                our many talents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              A Glimpse into Our{" "}
              <span className="text-orange-500">Classroom</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {classImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => openGallery(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA p="Give your child the gift of loving care and structured learning in a safe and happy environment." />

      <GalleryOverlay
        images={classImages.map((img) => ({ url: img.src, alt: img.alt }))}
        initialIndex={selectedImageIndex}
        isOpen={galleryOpen}
        onClose={closeGallery}
      />
    </>
  );
}

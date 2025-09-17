"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { GalleryOverlay } from "./GalleryOverlay";

const galleryImages = [
  {
    src: "/children-playing-outside-playground.jpg",
    alt: "Children playing outside on playground",
    title: "Outdoor Playground Fun",
  },
  {
    src: "/children-art-class-painting-creative.jpg",
    alt: "Children in art class painting and being creative",
    title: "Creative Art Classes",
  },
  {
    src: "/children-story-time-reading-circle.jpg",
    alt: "Children during story time in reading circle",
    title: "Story Time Circle",
  },
  {
    src: "/children-lunch-healthy-food-happy.jpg",
    alt: "Children enjoying healthy lunch together happily",
    title: "Healthy Lunch Time",
  },
  {
    src: "/children-music-dance-movement-activities.jpg",
    alt: "Children participating in music dance and movement activities",
    title: "Music & Movement",
  },
  {
    src: "/children-science-experiments-discovery-learning.jpg",
    alt: "Children doing science experiments and discovery learning",
    title: "Science Discovery",
  },
  {
    src: "/placeholder-euhbi.png",
    alt: "Children in Circle",
    title: "Children Learning Together",
  },
  {
    src: "/placeholder-0eku6.png",
    alt: "Digital Media",
    title: "Creative Activities",
  },
  {
    src: "/placeholder-5shav.png",
    alt: "Children Learning",
    title: "Educational Play",
  },
  {
    src: "/child-with-curly-hair-surrounded-by-educational-el.jpg",
    alt: "Child Learning",
    title: "Individual Learning",
  },
  {
    src: "/professional-parent-headshot--smiling-woman.jpg",
    alt: "Parent",
    title: "Happy Parents",
  },
];

export default function Gallery2() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setGalleryOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-sky-100 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-xl">Our Gallery</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Moments of <span className="text-orange-500">Joy & Learning</span>
          </h2>
          <p className="text-xl text-gray-600">
            Take a peek into our daily adventures and see the magic happening at
            Cosmo Kids
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="relative group cursor-pointer"
            onClick={() => openGallery(0)}
          >
            <img
              src="/children-playing-outside-playground.jpg"
              alt="Children playing outside on playground"
              className="w-full h-64 object-cover rounded-2xl transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-2xl flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-20 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => openGallery(1)}
          >
            <img
              src="/children-art-class-painting-creative.jpg"
              alt="Children in art class painting and being creative"
              className="w-full h-64 object-cover rounded-2xl transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-2xl flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-20 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => openGallery(2)}
          >
            <img
              src="/children-story-time-reading-circle.jpg"
              alt="Children during story time in reading circle"
              className="w-full h-64 object-cover rounded-2xl transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-2xl flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-20 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => openGallery(3)}
          >
            <img
              src="/children-lunch-healthy-food-happy.jpg"
              alt="Children enjoying healthy lunch together happily"
              className="w-full h-64 object-cover rounded-2xl transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-2xl flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-20 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => openGallery(4)}
          >
            <img
              src="/children-music-dance-movement-activities.jpg"
              alt="Children participating in music dance and movement activities"
              className="w-full h-64 object-cover rounded-2xl transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-2xl flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-20 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative group cursor-pointer"
            onClick={() => openGallery(5)}
          >
            <img
              src="/children-science-experiments-discovery-learning.jpg"
              alt="Children doing science experiments and discovery learning"
              className="w-full h-64 object-cover rounded-2xl transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-2xl flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-pink-500 bg-opacity-20 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
            View Full Gallery
          </Button>
        </div>
      </div>
      <GalleryOverlay
        images={galleryImages}
        initialIndex={selectedImageIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </section>
  );
}

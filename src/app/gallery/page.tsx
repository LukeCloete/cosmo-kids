"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GalleryOverlay } from "@/components/GalleryOverlay";
import { getGalleryImages } from "@/lib/data";

const cuteColors = [
  "from-pink-400",
  "from-blue-400",
  "from-yellow-400",
  "from-green-400",
  "from-purple-400",
  "from-orange-400",
  "from-red-400",
  "from-indigo-400",
  "from-teal-400",
];

export default function GalleryPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await getGalleryImages();
        setImages(fetchedImages);
      } catch (err) {
        setError("Failed to fetch images.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const openGallery = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
          <p className="text-xl text-gray-700">Loading Gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <p className="text-xl text-red-700">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Our <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
            A glimpse into the joyful and vibrant life at Cosmo Kids. See our
            little ones learn, play, and grow.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image: any, index: number) => (
            <div
              key={image.id || index}
              className="bg-rose-300 rounded-lg shadow-lg overflow-hidden cursor-pointer group relative"
              onClick={() => openGallery(index)}
            >
              <div className="relative h-64 z-[1] w-full">
                <Image
                  src={image.url}
                  alt={image.title}
                  width={1920}
                  height={1080}
                  className="transition-transform z-[2] object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center"></div>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 z-[20] bg-gradient-to-t ${
                  cuteColors[index % cuteColors.length]
                } to-transparent`}
              >
                <h3 className="text-xl font-bold text-white text-center">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GalleryOverlay
        images={images.map((img) => ({ ...img, alt: img.title }))}
        initialIndex={selectedImageIndex}
        isOpen={galleryOpen}
        onClose={closeGallery}
      />
    </section>
  );
}

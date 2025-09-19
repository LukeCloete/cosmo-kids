"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { GalleryOverlay } from "./GalleryOverlay";
import Image from "next/image";
import { getGalleryImages } from "@/lib/data";
import Link from "next/link";

export default function Gallery2() {
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
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openGallery(index)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={400}
                height={300}
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
      <GalleryOverlay
        images={images.map((img) => ({ ...img, alt: img.title }))}
        initialIndex={selectedImageIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </section>
  );
}

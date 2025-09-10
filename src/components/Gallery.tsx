import Image from "next/image";
import IMAGE1 from "../app/public/gallery/img1.jpg";
import IMAGE2 from "../app/public/gallery/img2.jpg";
import IMAGE3 from "../app/public/gallery/img3.jpg";
import IMAGE4 from "../app/public/gallery/img4.jpg";
import IMAGE5 from "../app/public/gallery/img5.jpg";
import IMAGE6 from "../app/public/gallery/img6.jpg";
import IMAGE7 from "../app/public/gallery/img7.jpg";
import IMAGE8 from "../app/public/gallery/img8.jpg";

export default function Gallery() {
  const images = [
    IMAGE1,
    IMAGE2,
    IMAGE3,
    IMAGE4,
    IMAGE5,
    IMAGE6,
    IMAGE7,
    IMAGE8,
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        <div className="text-center flex gap-2 flex-col">
          <p className="text-orange-400 text-xl">Gallery</p>
          <h2 className="text-3xl text-black font-bold md:text-4xl">
            A glimpse into the fun and engaging world of our Kids.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={1024}
                height={1024}
                className="object-cover rounded-2xl w-full h-full transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import SECTION_IMAGE from "../app/public/cosmo-kids-staff.jpg";

export default function Team() {
  return (
    <section className="relative py-32 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-400 rounded-full opacity-30"></div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <Image
              src={SECTION_IMAGE}
              alt="A smiling child with a colorful background"
              width={1080}
              height={1080}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
            <figcaption className="text-gray-600 dark:text-gray-300 mb-6">
              Michelle Schumacher (center), school principal, sitting with
              senior staff.
            </figcaption>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold md:text-4xl mb-4 text-gray-800 dark:text-gray-100">
              Our Teaching Staff
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cosmo Kids is blessed with awesome staff. The most important
              quality we require of our staff, is to absolutely love children.
              We are a family of 35 staff members, each one of us is passionate
              about what we do. We are fun, loving, silly, funny, happy, a
              little crazy, and very excited about being able to do the best job
              under God&apos;s sun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

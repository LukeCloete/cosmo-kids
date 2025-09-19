import Image from "next/image";
import JUNIOR_STAFF_IMAGE from "../../public/cosmo-Kids-Junior-School-Staff.jpg";
import SENIOR_STAFF_IMAGE from "../../public/cosmo-Kids-Senior-School-Staff.jpg";

export default function Team() {
  return (
    <section className="relative py-32 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-400 rounded-full opacity-30"></div>
      </div>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold md:text-4xl mb-12 text-center text-gray-800 dark:text-gray-100">
          Our Teaching Staff
        </h2>
        <div className="space-y-16">
          {/* Junior Team */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center md:text-left">
                Junior School
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                Our dedicated junior school staff are passionate about creating
                a nurturing and stimulating environment for our youngest
                learners.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={JUNIOR_STAFF_IMAGE}
                alt="Junior school staff"
                width={1080}
                height={1080}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Senior Team */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center md:text-left">
                Senior School
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
                Our experienced senior school staff are committed to academic
                excellence and preparing students for future success.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={SENIOR_STAFF_IMAGE}
                alt="Senior school staff"
                width={1080}
                height={1080}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

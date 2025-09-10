import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Parent1 from "../app/public/parent1.jpg";
import Parent2 from "../app/public/parent2.webp";
import Parent3 from "../app/public/parent3.jpg";
import Image from "next/image";
import BACKGROUND_IMAGE from "../app/public/sky-background.png";

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-sky-200 overflow-hidden">
      <div className="absolute inset-0 z-[1]">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 z-[2]">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-xl">Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Parents Say About Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 z-[3]">
          <Card className="bg-white rounded-2xl p-6 shadow-lg">
            <CardContent className="p-0 relative">
              <div className=" relative flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={Parent1}
                    alt="Parent"
                    width={512}
                    height={512}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Cosmo Kids has been amazing for my daughter. She&apos;s
                learned so much and made wonderful friends. The teachers are
                caring and professional. &quot;
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl p-6 shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={Parent2}
                    alt="Parent2"
                    width={512}
                    height={512}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;The programs here are exceptional. My son has developed
                confidence and creativity beyond what I expected. Highly
                recommend! &quot;
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl p-6 shadow-lg z-10">
            <CardContent className="p-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={Parent3}
                    alt="Parent"
                    width={512}
                    height={512}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;A nurturing environment where children thrive. The balance
                of learning and play is perfect. Our family loves Cosmo Kids!
                &quot;
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

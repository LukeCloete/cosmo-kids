"use client";

import { Gamepad2, Utensils, Heart } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getClasses, Class } from "../../lib/classesData";
import { useEffect, useState } from "react";
import Link from "next/link";

const backgroundColors = [
  "from-yellow-100 to-yellow-300",
  "from-red-100 to-red-300",
  "from-blue-100 to-blue-300",
  "from-green-100 to-green-300",
  "from-pink-100 to-pink-300",
  "from-orange-100 to-orange-300",
];

export default function Page() {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const classesData = await getClasses();
      setClasses(classesData);
    };

    fetchClasses();
  }, []);

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
              A <span className="text-orange-500">Day of Fun</span> & Learning
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Cosmo Kids, we are passionate about children's education and
              making each day filled with love and fun. We focus on all areas of
              development with a big emphasis on emotional intelligence to
              produce confident, brave, empathetic, and well-balanced little
              leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Group & Classrooms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-500">Groups</span> & Classrooms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our school is divided into 13 groups to ensure a tailored and
              nurturing environment for every age.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {classes.map((program, index) => (
              <Card
                key={program.id}
                className={`bg-gradient-to-br ${backgroundColors[index]} rounded-2xl overflow-hidden shadow-xl`}
              >
                <div className="aspect-video bg-transparent">
                  <Image
                    src={program.imageUrl}
                    alt={`${program.classname} Cosmo Kids`}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain scale-110"
                  />
                </div>
                <CardContent className="bg-white p-6 space-y-8 h-full">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {program.classname}
                    </h3>
                    <p className="text-orange-400 text-base">
                      {program.ageRange}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {program.description}
                    </p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full">
                    <Link
                      href={`/${program.classname
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      Join {program.classname}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Activities Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-500">Daily Program</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our program stimulates all the vital physical and mental stepping
              stones in your child's growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden p-8 text-center space-y-4">
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Learning Circle
              </h3>
              <p className="text-gray-600">
                Morning circle, bible lessons, songs and rhymes, and stories
                that engage and educate.
              </p>
            </div>

            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden p-8 text-center space-y-4">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Creative Activities
              </h3>
              <p className="text-gray-600">
                Painting, drawing, cutting, pasting, molding, puzzles, and
                sensory activities.
              </p>
            </div>

            <div className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden p-8 text-center space-y-4">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Outdoor Play</h3>
              <p className="text-gray-600">
                A variety of outdoor activities including bikes, swings, and
                climbing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Activities Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-orange-500">Special</span> Activities
            </h2>
            <p className="text-xl text-gray-600">
              Beyond our daily routine, we have a fun Holiday Program and
              welcome outside children to join in the fun! (Booking is
              essential, limited spaces available).
            </p>
          </div>

          <div className="relative">
            <img
              src="https://placehold.co/1200x600/C0EFFF/002244?text=Holiday+Program+Fun"
              alt="Children enjoying a holiday program"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our{" "}
            <span className="text-yellow-200">Cosmo Kids</span> Family?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Give your child the gift of structured learning, creative play, and
            nurturing care in our well-planned daily activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-semibold transition-all duration-300">
              Schedule a Visit
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg rounded-full font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

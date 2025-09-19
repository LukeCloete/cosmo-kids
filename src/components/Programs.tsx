"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { getClasses, Class } from "../lib/classesData";
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

export default function Programs() {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const classesData = await getClasses();
      setClasses(classesData);
    };

    fetchClasses();
  }, []);

  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-400 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-400 text-xl">Our Classes</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Happy Childhood Memories Start Here
          </h2>
          <p className="text-xl text-blue-100">
            Discover our comprehensive programs designed for your child&apos;s
            growth
          </p>
        </div>

        {/* Classes */}
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
                  <p className="text-gray-600 text-sm">{program.description}</p>
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
  );
}

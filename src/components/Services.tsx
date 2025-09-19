import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Paintbrush,
  Book,
  Music,
  UtensilsCrossedIcon,
  BikeIcon,
  Cog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Children2 from "../../public/children2.png";

const services = [
  {
    icon: UtensilsCrossedIcon,
    title: "healthy food",
    description:
      "A variety of breakfasts, healthy snacks and cooked lunches served.",
    position: "left",
  },
  {
    icon: Cog,
    title: "Gross Motor activities",
    description:
      "A variety of physical activities to help children develop their gross motor skills and have fun.",
    position: "left",
  },
  {
    icon: Paintbrush,
    title: "Problem Solving & Art",
    description:
      "Painting, drawing, cutting, pasting, moulding, puzzles, threading, stacking.",
    position: "left",
  },
  {
    icon: Book,
    title: "Reading Sessions",
    description: "Morning circle, bible lessons, songs and rhymes, stories.",
    position: "right",
  },
  {
    icon: Music,
    title: "Music",
    description: "Singing, dancing, fantasy play and musical instruments.",
    position: "right",
  },
  {
    icon: BikeIcon,
    title: "Toys",
    description:
      "Bikes, tri-cycles,scooters, prams, swings, see-saws, steering wheels",
    position: "right",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-sky-100 py-16 px-4 md:py-24">
      {/* Background elements */}

      <Image
        src={Children2}
        alt="Kid"
        width={1080}
        height={1080}
        className="absolute hidden lg:block bottom-0 top-[20%] left-[40%] opacity-15 z-[2] w-[600px] h-auto animate-float-delay"
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl z-10 bg-transparent flex flex-col gap-16">
        <div className="text-center flex gap-4 flex-col items-center ">
          <p className="text-orange-400 text-xl">Our Activities</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            We Give The Best For Your Children
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex z-[3] lg:flex-col gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-transparent border-none shadow-none"
            >
              <CardContent
                className={cn("flex items-start px-4", {
                  "flex-row-reverse": service.position === "right",
                })}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <div
                  className={cn("flex-grow", {
                    "text-right px-4": service.position === "right",
                  })}
                >
                  <h4 className="text-lg font-semibold mb-1">
                    {service.title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

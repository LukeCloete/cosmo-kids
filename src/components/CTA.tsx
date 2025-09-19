import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CTAProps {
  p: string;
}

export default function CTA({ p }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Join Our <span className="text-yellow-200">Cosmo Kids</span>{" "}
          Family?
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">{p}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-semibold transition-all duration-300">
            <Link href="/schedule-visit">Schedule a Visit</Link>
          </Button>
          <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg rounded-full font-semibold transition-all duration-300">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

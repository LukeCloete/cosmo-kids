import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";
import SECTION_IMAGE from "../app/public/children3.png";

export default function Contact() {
  return (
    <section className="py-32 bg-orange-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-red-300 rounded-full opacity-60"></div>

        <div className="absolute bottom-[calc(5%)] right-[calc(5%)] w-40 h-40 opacity-50 bg-[url('../app/public/smart-lions.webp')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-30 -translate-y-16 translate-x-16"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <Image
              src={SECTION_IMAGE}
              alt="Children Playing"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-orange-400 text-xl">Get In Touch</p>
              <h2 className="text-4xl font-bold text-gray-800">
                Making A Difference, One{" "}
                <span className="text-orange-500">Child At A Time</span>
              </h2>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="parentName" className="text-lg">
                    Parent Name
                  </Label>
                  <Input
                    id="parentName"
                    placeholder="Parent Name"
                    className="rounded-full"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phoneNumber" className="text-lg">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="emailAddress" className="text-lg">
                  Email Address
                </Label>
                <Input
                  id="emailAddress"
                  placeholder="Email Address"
                  className="rounded-full"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="childAge" className="text-lg">
                  Child&apos;s Age
                </Label>
                <Input
                  id="childAge"
                  type="number"
                  placeholder="Child's Age"
                  className="rounded-full"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="childNeeds" className="text-lg">
                  Tell us about your child&apos;s needs...
                </Label>
                <Textarea
                  id="childNeeds"
                  placeholder="Tell us about your child's needs..."
                  className="rounded-2xl"
                  rows={4}
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "./ui/card";
import Blog1 from "../../public/news1.jpg";
import Blog2 from "../../public/news2.jpg";
import Blog3 from "../../public/news3.jpg";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Latest News + Events
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-2 border-orange-300 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <Image
                src={Blog1}
                alt="Blog Article"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Story Night 2021
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 overflow-ellipsis">
                Join us for an evening of storytelling, fun activities, and
                community bonding.
              </p>
              <p className="text-sm text-gray-500">March 15, 2021</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-orange-300 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <Image
                src={Blog2}
                alt="Blog Article"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Cosmo Holiday Fun
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 overflow-ellipsis">
                Fun and educational activities to keep your children engaged
                throughout the changing seasons.
              </p>
              <p className="text-sm text-gray-500">Febreuary 17, 2021</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-orange-300 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <Image
                src={Blog3}
                alt="Blog Article"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Sleepover Coming Soon!
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 overflow-ellipsis">
                Get ready for a night of fun, games, and learning with our
                upcoming sleepover event.
              </p>
              <p className="text-sm text-gray-500">January 5, 2021</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Button className="mt-10 bg-orange-500 hover:bg-orange-600 font-semibold text-white mx-auto block rounded-full">
        View All News
      </Button>
    </section>
  );
}

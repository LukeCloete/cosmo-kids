import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import BouncyBunny from "../app/public/Bouncy_bunny-removebg-preview.webp";
import JollyGiraffe from "../app/public/jolly-giraffe.webp";
import SmartLions from "../app/public/smart-lions.webp";
import CleverCats from "../app/public/clever-cats.webp";
import WiseMice from "../app/public/wise-mice.webp";
import BrainyElephants from "../app/public/brainy-elephant.webp";

export default function Programs() {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute text-white font-bold text-xl">
        {/* <img
          src="https://tykit.rometheme.pro/terra/wp-content/uploads/sites/96/2022/12/Sky2.png"
          alt="Child with Creative Learning Elements"
          className="w-full h-auto opacity-90"
        /> */}
      </div>
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

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-transparent">
              <Image
                src={BouncyBunny}
                alt="Bouncy Bunnies Cosmo Kids"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <CardContent className="bg-white p-6 space-y-8 h-full">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Bouncy Bunnies
                </h3>
                <p className="text-orange-400 text-base">6 - 12 Months Old</p>
                <p className="text-gray-600 text-sm">
                  2x Bouncy Bunny Groups - Ages 6 months to 18 months in their
                  own private house, with a kitchen, sleep room, indoor play
                  room and private shaded outside play area.
                </p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full">
                Join Bouncy Bunnies
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-100 to-red-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-transparent">
              <Image
                src={JollyGiraffe}
                alt="Jolly Giraffe Cosmo Kids"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <CardContent className="bg-white p-6 space-y-8 h-full">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Jolly Giraffe
                </h3>
                <p className="text-orange-400 text-base">1 - 2 Years Old</p>
                <p className="text-gray-600 text-sm">
                  3x Jolly Giraffe Groups - Ages 1-2 years, each with their own
                  classroom, bathroom and an outside play area.
                </p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full">
                Join Jolly Giraffes
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video">
              <Image
                src={SmartLions}
                alt="Smart Lions Cosmo Kids"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <CardContent className="bg-white p-6 space-y-8 h-full">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Smart Lions
                </h3>
                <p className="text-orange-400 text-base">2 - 3 Years Old</p>
                <p className="text-gray-600 text-sm">
                  2x Smart Lions Groups - Ages 2-3 years, with 2 lovely big
                  classrooms and their own huge playground and outdoor art
                  areas.
                </p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full">
                Join Smart Lions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video">
              <Image
                src={CleverCats}
                alt="Clever Cats Cosmo Kids"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <CardContent className="bg-white p-6 space-y-8 h-full ">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Clever Cats
                </h3>
                <p className="text-orange-400 text-base">3 - 4 Years Old</p>
                <p className="text-gray-600 text-sm">
                  2x Clever Cats Groups - Ages 3-4 years, with a classroom,
                  playroom, bathroom and 2 outdoor play areas.
                </p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full">
                Join Clever Cats Bunnies
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-100 to-pink-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video">
              <Image
                src={WiseMice}
                alt="Wise Mice Cosmo Kids"
                className="w-full h-full object-contain scale-125"
              />
            </div>
            <CardContent className="bg-white p-6 space-y-8 h-full">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Wise Mice
                </h3>
                <p className="text-orange-400 text-base">4 - 5 Years Old</p>
                <p className="text-gray-600 text-sm">
                  2x Wise Mice Groups - Ages 4-5 years, with their classroom,
                  kiddi lounge and outside play and art areas.
                </p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full">
                Join Wise Mice{" "}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-100 to-orange-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video">
              <Image
                src={BrainyElephants}
                alt="Brainy Elephants Cosmo Kids"
                className="w-full h-full object-contain scale-125"
              />
            </div>
            <CardContent className="bg-white p-6 space-y-8 h-full">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  Brainy Elephants
                </h3>
                <p className="text-orange-400 text-base">Grade 0</p>
                <p className="text-gray-600 text-sm">
                  1x Brainy Elephant - Grade 0 group, with their own house. A
                  lovely classroom, fantasy playroom, vegetable garden and
                  outside play area.
                </p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full">
                Join Brainy Elephants{" "}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

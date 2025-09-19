import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Music,
  Gamepad2,
  Palette,
  Star,
  Utensils,
  Heart,
  Moon,
  Sparkles,
  Puzzle,
  Hand,
  Bike,
} from "lucide-react";
import Image from "next/image";

const dailyActivities = [
  {
    title: "Learning Circle",
    description:
      "Morning circle, bible lessons, songs and rhymes, stories that engage and educate our little ones.",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    image: "/activities/sensory-activities.jpg",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconBgColor: "bg-blue-500",
  },
  {
    title: "Physical Activities",
    description:
      "Exercises, stretching, skipping, balancing, jumping, ball games and more to keep children active.",
    icon: <Users className="w-8 h-8 text-white" />,
    image: "/activities/sensory-activities.jpg",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    iconBgColor: "bg-green-500",
  },
  {
    title: "Music & Movement",
    description:
      "Singing, dancing, fantasy play and musical instruments to develop creativity and expression.",
    icon: <Music className="w-8 h-8 text-white" />,
    image: "/activities/sensory-activities.jpg",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    iconBgColor: "bg-purple-500",
  },
  {
    title: "Outdoor Play",
    description:
      "Bikes, tri-cycles, scooters, prams, swings, see-saws, steering wheels for active outdoor fun.",
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    image: "/activities/outdoor-play.jpg",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    iconBgColor: "bg-orange-500",
  },
  {
    title: "Creative Arts",
    description:
      "Painting, drawing, cutting, pasting, moulding, puzzles, threading, stacking activities.",
    icon: <Palette className="w-8 h-8 text-white" />,
    image: "/activities/creative-arts.jpg",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
    iconBgColor: "bg-pink-500",
  },
  {
    title: "Sensory Activities",
    description:
      "Exploring textures, smells, and sounds through a variety of materials like playdough, sand, and water.",
    icon: <Hand className="w-8 h-8 text-white" />,
    image: "/activities/sensory-activities.jpg",
    bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    iconBgColor: "bg-yellow-500",
  },
  {
    title: "Fantasy Activities",
    description:
      "Dress-up, role-playing, and imaginative story-telling to foster creativity and social skills.",
    icon: <Sparkles className="w-8 h-8 text-white" />,
    image: "/activities/fantasy-activities.jpg",
    bgColor: "bg-gradient-to-br from-rose-50 to-rose-100",
    iconBgColor: "bg-rose-500",
  },
  {
    title: "Problem Solving & Workbook Activities",
    description:
      "Puzzles, workbooks, and other engaging challenges to develop critical thinking and fine motor skills.",
    icon: <Puzzle className="w-8 h-8 text-white" />,
    image: "/activities/problem-solving.jpg",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    iconBgColor: "bg-indigo-500",
  },
  {
    title: "Gross Motor Activities",
    description:
      "Focus on running, jumping, and other physical activities that promote coordination and strength.",
    icon: <Bike className="w-8 h-8 text-white" />,
    image: "/activities/gross-motor-activities.jpg",
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    iconBgColor: "bg-cyan-500",
  },
];

export default function page() {
  return (
    <>
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
              Our Daily <span className="text-orange-500">Activities</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Below is a breakdown of your little one&apos;s day at Cosmo Kids.
              We provide carefully planned fun and educational activities each
              day with structured timetables filled with learning and joy.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Structure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              A <span className="text-orange-500">Well-Structured</span> Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Young children do well when the day is well structured. This
              routine allows them to anticipate coming events and develops their
              cooperation skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dailyActivities.map((activity, index) => (
              <Card
                key={index}
                className={`${activity.bgColor} border-0 shadow-lg`}
              >
                <CardHeader>
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={400}
                    height={300}
                    layout="responsive"
                    className="max-h-64 rounded-lg object-cover overflow-hidden"
                  />
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div
                    className={`${activity.iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}
                  >
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-orange-500">Nutritious</span> Meals & Snacks
            </h2>
            <p className="text-xl text-gray-600">
              A variety of breakfasts, healthy snacks and cooked lunches served
              throughout the day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Breakfast</h3>
                <p className="text-gray-600">
                  Nutritious breakfast options to start the day with energy and
                  enthusiasm.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Healthy Snacks
                </h3>
                <p className="text-gray-600">
                  Carefully selected healthy snacks to keep children nourished
                  throughout the day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8 text-center space-y-4">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Cooked Lunches
                </h3>
                <p className="text-gray-600">
                  Freshly prepared, balanced meals that provide essential
                  nutrients for growing children.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities & Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-500">Facilities</span> &
              Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Individual Classrooms
                  </h3>
                  <p className="text-gray-600">
                    Each group has their own classroom and outside play area for
                    focused learning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Moon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Rest Time
                  </h3>
                  <p className="text-gray-600">
                    All children sleep on beds with their own covers for
                    comfortable rest periods.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Learning Materials
                  </h3>
                  <p className="text-gray-600">
                    Group T-shirts and hats for outside play, plus diaries, art
                    files, song & rhyme books, and workbooks for older groups.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Progress Tracking
                  </h3>
                  <p className="text-gray-600">
                    Progress reports done twice a year for all groups to track
                    development.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/children-playing-outside-playground.jpg"
                alt="Children playing in classroom"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
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
              Beyond our daily routine, we organize special outings and fun
              holiday activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-300">
                <Image
                  src="/children-on-educational-field-trip-outing.jpg"
                  alt="Children on educational outing"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Educational Outings
                </h3>
                <p className="text-gray-600">
                  Regular field trips and educational outings to expand learning
                  beyond the classroom environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-200 to-green-300">
                <Image
                  src="/children-holiday-activities-celebration-fun.jpg"
                  alt="Children enjoying holiday activities"
                  width={900}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Holiday Activities
                </h3>
                <p className="text-gray-600">
                  Fun holiday activities and celebrations that create lasting
                  memories and bring joy to learning.
                </p>
              </CardContent>
            </Card>
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
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg rounded-full">
              Schedule a Visit
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

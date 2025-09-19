"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Creative Art Activities That Spark Imagination",
    excerpt:
      "Discover fun and engaging art projects that help children express their creativity while developing fine motor skills and artistic confidence.",
    category: "Activities",
    date: "Dec 15, 2024",
    readTime: "4 min read",
    image: "/children-art-class-painting-creative.jpg",
    featured: true,
    slug: "creative-art-activities-spark-imagination",
  },
  {
    id: 2,
    title: "The Science of Play: Why Outdoor Time Matters",
    excerpt:
      "Learn how outdoor play contributes to physical development, social skills, and cognitive growth in early childhood education.",
    category: "Education",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    image: "/children-playing-outside-playground.jpg",
    featured: false,
    slug: "science-of-play-outdoor-time-matters",
  },
  {
    id: 3,
    title: "Holiday Learning: Making Education Fun During Festivities",
    excerpt:
      "Transform holiday celebrations into learning opportunities with these creative educational activities and games.",
    category: "Events",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "/children-story-time-reading-circle.jpg",
    featured: false,
    slug: "holiday-learning-education-fun-festivities",
  },
  {
    id: 4,
    title: "Nutrition for Growing Minds: Healthy Snacks Kids Love",
    excerpt:
      "Explore nutritious snack ideas that fuel learning and development while satisfying young taste buds.",
    category: "Health",
    date: "Dec 8, 2024",
    readTime: "3 min read",
    image: "/children-lunch-healthy-food-happy.jpg",
    featured: false,
    slug: "nutrition-growing-minds-healthy-snacks",
  },
  {
    id: 5,
    title: "Music and Movement: Building Coordination Through Dance",
    excerpt:
      "Discover how music and movement activities enhance physical coordination, rhythm, and social interaction skills.",
    category: "Activities",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "/children-music-dance-movement-activities.jpg",
    featured: false,
    slug: "music-movement-building-coordination-dance",
  },
  {
    id: 6,
    title: "STEM Adventures: Simple Science Experiments for Curious Minds",
    excerpt:
      "Engage young scientists with safe, fun experiments that introduce basic scientific concepts and critical thinking.",
    category: "Education",
    date: "Dec 3, 2024",
    readTime: "7 min read",
    image: "/children-science-experiments-discovery-learning.jpg",
    featured: false,
    slug: "stem-adventures-simple-science-experiments",
  },
];

const categories = ["All", "Activities", "Education", "Events", "Health"];

export default function NewsEventsPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
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
              News & <span className="text-orange-500">Events</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest educational insights, activities, and
              events at Cosmo Kids
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10 py-3 text-lg border-2 border-sky-200 focus:border-orange-400"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border-sky-200 text-sky-700 hover:bg-sky-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-orange-500 fill-current" />
              <span className="text-orange-600 font-semibold">
                Featured Article
              </span>
            </div>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link href={`/news-and-events/${featuredPost.slug}`}>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-sky-500 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/news-events/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="border-sky-200 text-sky-700 hover:bg-sky-50 group bg-transparent"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Cosmo Kids
          </h3>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            Get the latest educational tips, activity ideas, and event updates
            delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-800 border-0"
            />
            <Button className="bg-white text-orange-500 hover:bg-orange-50">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

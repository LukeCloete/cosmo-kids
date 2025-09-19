import { Users, Lightbulb, Handshake } from "lucide-react";

export default function page() {
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
              Our <span className="text-orange-500">Beginning</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We look back at our journey and the foundation of our fun-filled
              learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-500">Story</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://placehold.co/800x600/C0EFFF/002244?text=Our+Beginning"
                alt="Our Story"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Handshake className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    A Passion for Children
                  </h3>
                  <p className="text-gray-600">
                    Cosmo Kids officially opened its doors in{" "}
                    <strong className="text-gray-900">July 2006</strong>. Since
                    our beginning, we have been dedicated to providing a
                    nurturing and fun learning environment for children. We are
                    proud to be a registered Private School with the Ministry of
                    Education.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Our Growth and Commitment
                  </h3>
                  <p className="text-gray-600">
                    We have grown to have{" "}
                    <strong className="text-gray-900">5 houses</strong> that
                    cater to{" "}
                    <strong className="text-gray-900">
                      7 different age groups
                    </strong>
                    , ensuring that each child receives age-appropriate care and
                    education in a comfortable and familiar setting.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Our Amazing Staff
                  </h3>
                  <p className="text-gray-600">
                    Our family includes a dedicated team of{" "}
                    <strong className="text-gray-900">
                      35 fun, child-loving staff members
                    </strong>{" "}
                    who are the heart of our school, passionate about making
                    each day a joyful learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
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

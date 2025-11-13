import React from "react";

const DiscoverSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFF8F8] to-[#FFDCDC] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#8B0E17] mb-4">
          Discover Local Food Stories
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Every bite has a story. Explore hidden gems, honest reviews, and heartwarming food moments shared by our community. Let’s celebrate the flavors that make every neighborhood unique.
        </p>

        {/* 3 Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#FFD1D1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#8B0E17] mb-2">
              🍜 Explore Nearby Eats
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Find local restaurants, cafes, and street food spots loved by real people — not algorithms.
            </p>
          </div>

          <div className="bg-white border border-[#FFD1D1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#8B0E17] mb-2">
              💬 Share Your Experience
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Write honest reviews, rate your favorite dishes, and inspire others to taste your discoveries.
            </p>
          </div>

          <div className="bg-white border border-[#FFD1D1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#8B0E17] mb-2">
              ❤️ Support Local Chefs
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Every review helps small restaurants grow and keeps local food culture alive in your city.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;

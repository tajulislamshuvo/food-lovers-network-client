import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-br from-[#FFF8F8] to-[#FFDCDC] min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto text-gray-800">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-[#8B0E17] mb-8">
          The Beauty of Local Food Connections
        </h1>

        {/* Paragraphs */}
        <p className="mb-6 leading-relaxed">
          Food isn’t just about taste — it’s about stories, memories, and people.
          Every local dish carries a unique identity built by generations of
          love, tradition, and creativity. When we explore small restaurants,
          home-cooked meals, and hidden street food corners, we discover the
          heart of our community.
        </p>

        <p className="mb-6 leading-relaxed">
          The <span className="font-semibold text-[#8B0E17]">Local Food Lovers Network</span> was
          created to bring together food enthusiasts who value authenticity and
          connection. It’s a space where everyone can share their honest
          opinions, post their favorite food discoveries, and celebrate the
          diversity of local flavors.
        </p>

        <p className="mb-6 leading-relaxed">
          When you post a review or recommendation, you’re not just talking
          about food — you’re helping someone else find their next favorite
          meal. You’re supporting a small business, encouraging a passionate
          chef, and preserving the taste of your neighborhood.
        </p>

        <p className="mb-6 leading-relaxed">
          Let’s keep exploring, tasting, and sharing — not just to fill our
          plates, but to build stronger bonds through the simple joy of good
          food. Because great meals are meant to be shared, and every story
          begins with one bite.
        </p>

        {/* Footer note */}
        <p className="text-center mt-10 text-sm text-gray-600 italic">
          — Written with love by the Local Food Lovers Network team
        </p>
      </div>
    </div>
  );
};

export default Blog;

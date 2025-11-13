import React from 'react';
import slider1 from '/slider-1.avif';
import slider2 from '/slider-2.jpg'
// import slider3 from '../../public/slider-3.jpg'
import slider4 from '/slider-4.webp'
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={slider1}
          className="w-full h-90 object-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* ---- OPTIONAL TEXT (centered) ---- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Discover Local Flavors
          </h2>
          <p className="mt-3 text-lg text-white/90 max-w-xl">
            Share reviews, photos, and hidden gems from your neighborhood.
          </p>
          <Link to='/blog' className="mt-6 btn bg-[#c1121f] hover:bg-[#a10e19] text-white border-none shadow-none">
            Explore Now
          </Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={slider2}
          className="w-full h-90 object-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* ---- OPTIONAL TEXT (centered) ---- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Share Your Food Story
          </h2>
          <p className="mt-3 text-lg text-white/90 max-w-xl">
            Post reviews, photos, and hidden gems. Let the world taste what you love.          </p>
          <Link to='/blog' className="mt-6 btn bg-[#c1121f] hover:bg-[#a10e19] text-white border-none shadow-none">
            Explore Now
          </Link>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={slider4}
          className="w-full h-90 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* ---- OPTIONAL TEXT (centered) ---- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Join the Local Food Revolution          </h2>
          <p className="mt-3 text-lg text-white/90 max-w-xl">
            Connect with foodies, discover street eats, and celebrate home-cooked magic.          </p>
          <Link to='/blog' className="mt-6 btn bg-[#c1121f] hover:bg-[#a10e19] text-white border-none shadow-none">
            Explore Now
          </Link>
        </div>


        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
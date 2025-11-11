import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedReviewCard from '../Components/FeaturedReviewCard';

const AllReview = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data)
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text)
  }
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-5 text-[#8B0E17]'>All Reviews</h1>
      <p className='font-bold text-md text-center text-gray-600'>Explore all reviews</p>

      <form onSubmit={handleSearch} className=" mt-5 mb-10 flex gap-2 justify-center">
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn bg-[#8B0E17] text-white font-medium hover:bg-[#6E0B12]  rounded-full">{loading ? "Searching...." : "Search"}</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mx-auto w-11/12">

        {data.map((model) => <FeaturedReviewCard key={model._id} model={model}></FeaturedReviewCard>)}
      </div>
    </div>
  );
};

export default AllReview;
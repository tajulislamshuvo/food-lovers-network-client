import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import FeaturedReviewCard from './FeaturedReviewCard';
import DiscoverSection from './DiscoverSection';

const Home = () => {
  const data = useLoaderData();
  // console.log(data)
  return (
    <div>
      <Banner></Banner>
      <div className="text-center text-4xl font-bold  mt-15 text-[#8B0E17]">Featured Reviews</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mx-auto w-11/12">
        {data.map((model, index) => <FeaturedReviewCard index={index} key={model._id} model={model}></FeaturedReviewCard>)}
      </div>

      <Link to='/all-review' className=' text-center mb-5 flex justify-center items-center w-[150px] mx-auto bg-[#C1121F] hover:bg-[#A50E1A] text-white font-semibold px-5 py-2 rounded-lg shadow-md'>Show All</Link>

      <DiscoverSection></DiscoverSection>
    </div >
  );
};

export default Home;
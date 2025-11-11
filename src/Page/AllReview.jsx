import React from 'react';
import { useLoaderData } from 'react-router';
import FeaturedReviewCard from '../Components/FeaturedReviewCard';

const AllReview = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 mx-auto w-11/12">

        {data.map((model) => <FeaturedReviewCard key={model._id} model={model}></FeaturedReviewCard>)}
      </div>
    </div>
  );
};

export default AllReview;
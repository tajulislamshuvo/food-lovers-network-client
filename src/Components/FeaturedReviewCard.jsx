import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const FeaturedReviewCard = ({ model }) => {
  console.log(model);
  const { _id, photo, food_name, restaurant_name, reviewer_name, rating, review_date } = model;
  return (
    <div>
      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-[#FFD1D1] hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        {/* Image */}
        <div className="w-full h-52 overflow-hidden">
          <img
            src={photo}
            alt={food_name}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#8B0E17]">{food_name}</h3>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium text-gray-700">{restaurant_name}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">Reviewed by {reviewer_name}</p>

          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mb-4">Review Date: {new Date(review_date).toLocaleDateString()}</p>

          {/* Button */}
          <Link to={`/review-detailes/${_id}`} className="w-full py-2 px-3 mt-2 bg-[#8B0E17] text-white rounded-lg font-medium hover:bg-[#6E0B12] transition-colors duration-300">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReviewCard;
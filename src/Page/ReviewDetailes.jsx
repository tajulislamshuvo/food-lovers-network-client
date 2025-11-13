import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../Components/Loading';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const ReviewDetailes = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [model, setModel] = useState({});

  useEffect(() => {
    fetch(`https://food-lover-network-api-server.vercel.app/review/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setModel(data);
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="bg-gradient-to-br from-[#FFF8F8] to-[#FFDCDC] min-h-screen py-12 px-5 flex justify-center items-center">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-md border border-[#FFD1D1] overflow-hidden">
          {/* Image Section */}
          <div className="w-full h-72 overflow-hidden">
            <img
              src={model.photo}
              alt={model.food_name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-[#8B0E17] mb-2">
              {model.food_name}
            </h2>

            <p className="text-gray-700 font-medium text-lg mb-1">
              {model.restaurant_name}
            </p>

            <p className="flex items-center text-sm text-gray-500 mb-4">
              <FaMapMarkerAlt className="mr-1 text-[#8B0E17]" />
              {model.restaurant_location}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-lg ${i < model.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                />
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                ({model.rating}/5)
              </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {model.review_text}
            </p>

            {/* Reviewer Info */}
            <div className="border-t border-[#FFD1D1] pt-4 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-[#8B0E17]">
                  Reviewer:
                </span>{" "}
                {model.reviewer_name}
              </p>

              <p>
                <span className="font-semibold text-[#8B0E17]">
                  Review Date:
                </span>{" "}
                {new Date(model.review_date).toLocaleDateString()}
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => window.history.back()}
                className="px-5 py-2 bg-[#8B0E17] text-white rounded-lg font-medium hover:bg-[#6E0B12] transition-colors duration-300"
              >
                ← Back to Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailes;
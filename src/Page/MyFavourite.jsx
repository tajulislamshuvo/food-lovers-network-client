import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Link } from 'react-router';

const MyFavourite = () => {
  // const [value, setValue] = useState(false);
  const { user } = use(AuthContext);
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/favourites/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setFavourite(data);
      })
  }, [user?.email])

  // useEffect(() => {
  //   if (favourite.length < 1) {
  //     setValue(true);
  //   } else {
  //     setValue(false);
  //   }
  // }, [favourite]);

  return (
    <div>
      <div className='min-h-[calc(100vh-200px)] p-3 text-center w-[10/12] mx-auto'>
        <h2 className='text-3xl font-bold text-center mt-5 mb-3 text-[#8B0E17]'>My Favourite</h2>

        {/* <p className='text-xl mt-4 text-center font-bold flex justify-center items-center text-[#8B0E17]'>{value ? 'You do not add any favourite review' : ''}</p> */}



        <div className="hidden md:block bg-white rounded-2xl shadow-md   overflow-hidden">
          <table className="min-w-full text-sm">

            <thead className="bg-[#8B0E17] text-white text-left">
              {/* <tr>
                  <th className="py-3 px-4">Food Image</th>
                  <th className="py-3 px-4">Food Name</th>
                  <th className="py-3 px-4">Reviewer Name</th>
                </tr> */}
            </thead>

            <tbody>
              {favourite.map((review) => (
                <tr
                  key={review._id}
                  className="border-t border-[#FFE3E3] hover:bg-[#FFF0F0] transition-colors"
                >
                  <td className="py-3 px-4">
                    <img
                      src={review.foodImg}
                      alt={review.foodName}
                      className="h-12 w-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {review.foodName}
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {review.reviewerName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden">
          {favourite.map((review) => (
            <div
              key={review._id}
              className="bg-white rounded-xl shadow-md border border-[#FFD1D1] p-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={review.foodImg}
                  alt={review.foodName}
                  className="h-16 w-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-[#8B0E17] text-base">
                    {review.foodName}
                  </h3>
                  <p className="text-sm text-gray-600">{review.restaurant_name}</p>
                  <p className="text-xs text-gray-500">
                    {review.reviewerName}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div >

    </div>
  );
};

export default MyFavourite; 
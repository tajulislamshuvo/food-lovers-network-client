import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const MyReview = () => {
  const { user } = use(AuthContext);
  const [myReview, setMyReview] = useState([]);
  const [value, setValue] = useState(false);


  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMyReview(data);
        })
    }
  }, [user])


  const handleReviewDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('Now delete')
        fetch(`http://localhost:3000/review/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log('After delete', data)
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const remainingReview = myReview.filter(review => review._id !== _id).sort((a, b) => (b.review_date - a.review_date
              ));
              setMyReview(remainingReview);
            }
          })
      }
    })

  }

  useEffect(() => {
    if (myReview.length < 1) {
      setValue(true);
    } else {
      setValue(false);
    }
  }, [myReview]);


  return (
    <div className='min-h-[calc(100vh-200px)] p-3 text-center w-[11/12] mx-auto'>
      <h2 className='text-3xl font-bold text-center mt-5 mb-3 text-[#8B0E17]'>My Reviews</h2>

      <p className='text-xl mt-4 text-center font-bold flex justify-center items-center text-[#8B0E17]'>{value ? 'You do not add any review' : ''}</p>


      <div className="hidden md:block bg-white rounded-2xl shadow-md   overflow-hidden">
        <table className="min-w-full text-sm">

          {/* <thead className="bg-[#8B0E17] text-white text-left">
            <tr>
              <th className="py-3 px-4">Food Image</th>
              <th className="py-3 px-4">Food Name</th>
              <th className="py-3 px-4">Restaurant Name</th>
              <th className="py-3 px-4">Post Date</th>
              <th className="py-3 px-4">Edit</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead> */}

          <tbody>
            {myReview.map((review) => (
              <tr
                key={review._id}
                className="border-t border-[#FFE3E3] hover:bg-[#FFF0F0] transition-colors"
              >
                <td className="py-3 px-4">
                  <img
                    src={review.photo}
                    alt={review.food_name}
                    className="h-12 w-12 object-cover rounded-lg"
                  />
                </td>
                <td className="py-3 px-4 font-medium text-gray-700">
                  {review.food_name}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {review.restaurant_name}
                </td>
                <td className="py-3 px-4 text-gray-500">
                  {new Date(review.review_date).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <button className="px-3 py-1 border border-[#8B0E17] text-[#8B0E17] rounded-lg hover:bg-[#8B0E17] hover:text-white transition-all duration-300">
                    Edit
                  </button>
                </td>
                <td className="py-3 px-4">
                  <button onClick={() => handleReviewDelete(review._id)} className="px-3 py-1 border border-[#8B0E17] text-[#8B0E17] rounded-lg hover:bg-[#8B0E17] hover:text-white transition-all duration-300">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden">
        {myReview.map((review) => (
          <div
            key={review._id}
            className="bg-white rounded-xl shadow-md border border-[#FFD1D1] p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.photo}
                alt={review.food_name}
                className="h-16 w-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-[#8B0E17] text-base">
                  {review.food_name}
                </h3>
                <p className="text-sm text-gray-600">{review.restaurant_name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(review.review_date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="px-3 py-1 text-sm border border-[#8B0E17] text-[#8B0E17] rounded-lg hover:bg-[#8B0E17] hover:text-white transition-all duration-300">
                Edit
              </button>
              <button onClick={() => handleReviewDelete(review._id)} className="px-3 py-1 text-sm border border-[#8B0E17] text-[#8B0E17] rounded-lg hover:bg-[#8B0E17] hover:text-white transition-all duration-300">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
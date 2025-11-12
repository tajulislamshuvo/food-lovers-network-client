import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const AddReview = () => {
  const { user } = use(AuthContext)
  const [review1, setReview1] = useState([]);
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const food = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const restaurentName = e.target.restaurentName.value;
    const restaurentLocation = e.target.restaurentLocation.value;
    const rating = e.target.rating.value;
    const reviewText = e.target.reviewText.value;
    console.log(name, email, food, foodImage, restaurentName, restaurentLocation, rating, reviewText);

    const newReview = {
      photo: foodImage,
      food_name: food,
      restaurant_name: restaurentName,
      restaurant_location: restaurentLocation,
      reviewer_name: name,
      rating: rating,
      review_text: reviewText,
      email: email,
      review_date: new Date(),




    }

    fetch('http://localhost:3000/review', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success("Successfully added!");
          newReview._id = data.insertedId;
          const newReviews = [...review1, newReview];
          newReviews.sort((a, b) => b.review_date - a.review_date);
          setReview1(newReviews)


        }

        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })


  }

  return (
    <div>
      <h3 className='text-3xl font-bold text-center mt-5 text-[#8B0E17]'>Add your review</h3>

      <div>
        <div className="flex justify-center min-h-screen items-center p-4">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">

            <form onSubmit={handleReviewSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" name='name' readOnly defaultValue={user?.displayName} />
                <label className="label">Email</label>
                <input type="email" className="input" name='email' defaultValue={user?.email} readOnly />

                {/* food */}
                <label className="label">Food Name</label>

                <input type="text" className="input" placeholder='Food name' name='foodName' />

                {/* food image */}
                <label className="label">Food Image</label>

                <input type="text" className="input" placeholder='Food Image URL' name='foodImage' />


                {/* restaurent name */}
                <label className="label">Restaurent Name</label>
                <input type="text" className="input" placeholder='Restaurent Name' name='restaurentName' />

                {/* restaurent location */}
                <label className="label">Restaurent Location</label>
                <input type="text" className="input" placeholder='Restaurent Location' name='restaurentLocation' />


                {/* rating */}
                <label className="label">Rating</label>
                <input type="number" className="input" placeholder='Rating' name='rating' />

                {/* review text */}
                <label className="label">Review Detailes</label>
                <textarea type='text' name="reviewText" placeholder='Describe Your Review' rows={3} className='p-1.5 border rounded-md border-gray-400'></textarea>


                <button className="btn btn-neutral mt-4 bg-[#b93b44] hover:bg-[#A50E1A] text-white font-semibold">Place your review</button>
              </fieldset>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
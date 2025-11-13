import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const EditReview = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = use(AuthContext)
  console.log(data)
  const handeEditReview = (e) => {
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


    const editedReview = {
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

    fetch(`http://localhost:3000/review/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully edited!");
        navigate('/all-review');
      })
      .catch((err) => {
        console.log(err);
      });

  }
  return (
    <div>
      <h3 className='text-3xl font-bold text-center mt-5 text-[#8B0E17]'>Edit your review</h3>

      <div>
        <div className="flex justify-center min-h-screen items-center p-4">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">

            <form onSubmit={handeEditReview}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" name='name' readOnly defaultValue={user?.displayName} />
                <label className="label">Email</label>
                <input type="email" className="input" name='email' defaultValue={user?.email} readOnly />

                {/* food */}
                <label className="label">Food Name</label>

                <input type="text" className="input" defaultValue={data.food_name} placeholder='Food name' name='foodName' />

                {/* food image */}
                <label className="label">Food Image</label>

                <input type="text" className="input" placeholder='Food Image URL' name='foodImage' defaultValue={data.photo} />


                {/* restaurent name */}
                <label className="label">Restaurent Name</label>
                <input type="text" className="input" placeholder='Restaurent Name' name='restaurentName' defaultValue={data.restaurant_name} />

                {/* restaurent location */}
                <label className="label">Restaurent Location</label>
                <input type="text" className="input" placeholder='Restaurent Location' name='restaurentLocation' defaultValue={data.restaurant_location} />


                {/* rating */}
                <label className="label">Rating</label>
                <input type="number" className="input" placeholder='Rating' name='rating' defaultValue={data.rating} />

                {/* review text */}
                <label className="label">Review Detailes</label>
                <textarea type='text' name="reviewText" placeholder='Describe Your Review' rows={3} className='p-1.5 border rounded-md border-gray-400' defaultValue={data.
                  review_text}></textarea>


                <button className="btn btn-neutral mt-4 bg-[#b93b44] hover:bg-[#A50E1A] text-white font-semibold">Place your review</button>
              </fieldset>
            </form>

          </div>
        </div>
      </div>
    </div>

  );
};

export default EditReview;
import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const AddReview = () => {
  const { user, loading } = use(AuthContext)
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

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

                <input type="text" className="input" placeholder='Food name' name='food-name' />

                {/* restaurent name */}
                <label className="label">Restaurent Name</label>
                <input type="text" className="input" placeholder='Restaurent Name' name='restaurent-name' />

                {/* restaurent location */}
                <label className="label">Restaurent Location</label>
                <input type="text" className="input" placeholder='Restaurent Location' name='restaurent-location' />


                {/* rating */}
                <label className="label">Rating</label>
                <input type="number" className="input" placeholder='Reviewer Name' name='reviewer-name' />

                {/* review text */}
                <label className="label">Review Detailes</label>
                <textarea name="review-text" placeholder='Describe Your Review' rows={3} className='p-1.5 border rounded-md border-gray-400'></textarea>


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
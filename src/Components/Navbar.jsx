import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { IoLogOut } from 'react-icons/io5';
import userImg from '/user.png'

const Navbar = () => {

  const { user, SignOut } = use(AuthContext);
  const handleSignOut = () => {
    SignOut()
      .then(() => {

        toast.success('Log out Successfull')
      }).catch(err => {
        console.log(err.message)
      })
  }
  return (
    <div className="navbar px-2 md:px-9 bg-[#8B0E17] text-[#f5f5f5] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#da525b] rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li className='font-bold '><NavLink to='/'>Home</NavLink></li>

            <li className='font-bold'><NavLink to='/all-review'>All Reviews</NavLink></li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <h1 className="text-xl md:text-2xl font-bold tracking-tight">

          <span className="text-[#e91e2f]">Food </span>
          <span className="text-[#eb404c]">Lovers</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='font-bold text-[#ebc2c4]'><NavLink to='/'>Home</NavLink></li>

          <li className='font-bold text-[#ebc2c4]'><NavLink to='all-review'>All Reviews</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex gap-1.5'>
          {
            user ? (
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 border-2 border-gray-300 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      referrerPolicy="no-referrer"
                      className='w-10 h-10'
                      src={user.photoURL || userImg}
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu  menu-sm dropdown-content bg-black rounded-box z-50 mt-3 w-52 p-2 shadow"
                >
                  <div className=" pb-3 border-b border-b-gray-200">
                    <li className="text-sm font-bold">{user.displayName}</li>
                    <li className="text-xs">{user.email}</li>
                  </div>
                  <li className="mt-3">
                    <Link to={"/add-review"}>
                      Add review
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link to={"/my-review"}>
                      My review
                    </Link>
                  </li>


                  <li>
                    <button
                      onClick={handleSignOut}
                      className="bg-[#C1121F] hover:bg-[#A50E1A] text-white font-semibold px-5 py-2 rounded-lg shadow-md"
                    >
                      <IoLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (<>
              <Link to='/register' className="bg-[#C1121F] hover:bg-[#A50E1A] text-white font-semibold px-5 py-2 rounded-lg shadow-md">
                Register
              </Link>
              <Link to='/login' className="bg-[#C1121F] hover:bg-[#A50E1A] text-white font-semibold px-5 py-2 rounded-lg shadow-md">
                Login
              </Link>

            </>

            )
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
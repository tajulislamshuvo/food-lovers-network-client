import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEyeOff } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link } from 'react-router';

const Login = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click);
  }


  return (
    <div className="flex justify-center min-h-[calc(100vh-50px)] items-center p-4">
      <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"

              className="input"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label">Password</label>
            <div className='relative'>
              <input
                name="password"
                type={click ? 'text' : 'password'}
                className="input"
                placeholder="Password"
                required
              />
              <div onClick={handleClick} className='absolute top-4 right-7 cursor-pointer'>
                {
                  click ? <IoMdEyeOff size={15} /> : <MdOutlineRemoveRedEye size={15}></MdOutlineRemoveRedEye>
                }

              </div>

            </div>

            <div>
              <button type='button' className="link link-hover">Forgot password?</button>
            </div>

            {/* {error && <p className="text-red-400 text-xs">{error}</p>} */}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <button type='button' className='btn w-full'><FcGoogle size={24} /> Sign in with google</button>

            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login; Login
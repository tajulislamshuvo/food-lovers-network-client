import React, { use, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEyeOff } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const emailRef = useRef(null);


  const { setUser, signInUser, signInWithGoogle, handleForgetPass } = use(AuthContext);
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click);
  }

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success('Log in successfull');
        navigate(`${location.state ? location.state : '/'}`);

      }).catch(err => {
        toast.error(err.message)
      })
  }

  // forget password
  const handleResetPass = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    handleForgetPass(email)
      .then(res => {
        console.log(res)
        toast('Check Your Email');
      }).catch((error) => {
        console.log(error);
        toast.error(error.message)
      })
  }


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const regExp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S+$/;
    if (!regExp.test(password)) {
      toast.error('Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character. No spaces allowed.');
      return;
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        toast.success('Login Successful');
        navigate(`${location.state ? location.state : '/'}`);
      }).catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error(errorCode)
      })

    form.email.value = '';
    form.password.value = '';
  }

  return (
    <div className="flex justify-center min-h-[calc(100vh-50px)] items-center p-4">
      <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              ref={emailRef}
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
              <button onClick={handleResetPass} type='button' className="link link-hover">Forgot password?</button>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <button onClick={handleGoogleLogIn} type='button' className='btn w-full'><FcGoogle size={24} /> Sign in with google</button>

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
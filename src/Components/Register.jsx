import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { IoMdEyeOff } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

const Register = () => {
  const navigate = useNavigate()
  const [nameError, setNameError] = useState("");

  const { creatUser, setUser, signInWithGoogle, updateUser } = use(AuthContext);
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



  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    };

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const regExp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S+$/;
    if (!regExp.test(password)) {
      toast.error('Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character. No spaces allowed.');
      return;
    }
    const confirmPassword = form.cPassword.value;
    if (password !== confirmPassword) {
      toast.error('Confirm password is not matched');
      return
    }


    creatUser(email, password)
      .then(result => {
        const user1 = result.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user1, displayName: name, photoURL: photo });
        }).catch((err) => {
          // console.log(err.message);
          setUser(user1)

        })
        // console.log(user1)
        toast.success('Registered Successfully');
        navigate('/');

      }).catch((error) => {
        setNameError(error.code);
        toast.error(error.message);

      })

    form.name.value = '';
    form.email.value = '';
    form.password.value = '';
    form.photo.value = '';



  }
  return (
    <div className="flex justify-center min-h-screen items-center p-4">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />


            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
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
            <label className="label">Confirm password</label>

            <div className='relative'>
              <input
                name="cPassword"
                type={click ? 'text' : 'password'}
                className="input"
                placeholder="Confirm password"
                required
              />
              <div onClick={handleClick} className='absolute top-4 right-7 cursor-pointer'>
                {
                  click ? <IoMdEyeOff size={15} /> : <MdOutlineRemoveRedEye size={15}></MdOutlineRemoveRedEye>
                }

              </div>
            </div>

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <button onClick={handleGoogleLogIn} type='button' className='btn w-full'><FcGoogle size={24} /> Sign up with google</button>


            <p className="font-semibold text-center pt-5">
              Allready Have An Account ?{" "}
              <Link className="text-secondary" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register; Register
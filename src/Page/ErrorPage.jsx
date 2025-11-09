import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import error from '../../public/error.webp';
import error2 from '../../public/error2.png'
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <Navbar></Navbar>
      <main className='flex-1 min-h-[calc(100vh-200px)] p-10 text-center '>
        <img src={error2} alt="" className='w-[300px] mx-auto' />
        <h2 className='text-center font-bold text-4xl text-[#c1121f]'>Oops, {error.message}</h2>
        <p className='text-center text-xl mb-4 font-bold text-[#522225] '>The page you are looking for is not availables </p>

        <Link to='/' className="bg-[#C1121F] hover:bg-[#A50E1A] text-white font-semibold px-5 py-2 rounded-lg shadow-md">
          Back to home
        </Link>

      </main>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
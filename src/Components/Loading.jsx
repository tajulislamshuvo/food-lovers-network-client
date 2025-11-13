import React from 'react';

// import donut2 from '/donut2.png'

const Loading = () => {
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-200px)]'>
      {/* <img className='rounded-full w-50 animate-spin duration-800' style={{ animationDuration: '2s' }} src={donut2} alt="" /> */}
      <div className='w-9 h-9 rounded-full border-4 border-red-800 border-t-gray-300 animate-spin duration-800' style={{ animationDuration: '2s' }} ></div>
    </div>
  );
};

export default Loading;
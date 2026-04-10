import React from 'react';

const State = () => {
  return (
    <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
      <div className='max-w-300 mx-auto py-10 text-white'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-center mb-6'>Trusted by Millions, Built for You</h1>
        <div className='grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mt-10'>
        <div className='text-center space-y-3'>
          <p className='text-[18px] font-medium'>Total Downloads</p>
          <h2 className='text-5xl font-bold'>29.6M</h2>
          <p>21% more than last month</p>
        </div>
        <div className='text-center space-y-3'>
          <p className='text-[18px] font-medium'>Total Reviews</p>
          <h2 className='text-5xl font-bold'>906K</h2>
          <p>46% more than last month</p>
        </div>
        <div className='text-center space-y-3'>
          <p className='text-[18px] font-medium'>Active Apps</p>
          <h2 className='text-5xl font-bold'>132+</h2>
          <p>31 more will Launch</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default State;
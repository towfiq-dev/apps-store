import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TrendingApp = ({appData}) => {
  const {title, image, downloads, ratingAvg, id} = appData
  return (
    <Link className='shadow-md p-4 rounded'>
      <div className='flex justify-center'>
        <img className='w-50 h-auto rounded-full ' src={image} alt="" />
      </div>
      <h2 className='text-[18px] font-semibold mb-4 mt-3'>{title}</h2>
      <div className='flex gap-5 justify-between'>
      <h3 className='text-[20px] flex gap-2 items-center font-semibold text-green-500'>
        <FaDownload />
        {downloads}
        </h3>
      <h3 className='text-[20px] flex gap-2 items-center font-semibold text-green-500'>
        <FaStar />
        {ratingAvg}
        </h3>
      
      </div>
      <div className='flex justify-center btn-primary mt-5'>
        <button className='btn w-full'>View Details</button>
      </div>
    </Link>
  );
};

export default TrendingApp;
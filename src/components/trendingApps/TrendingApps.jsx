import React, { use } from 'react';
import TrendingApp from './TrendingApp';
import { Link } from 'react-router-dom';

const TrendingApps = ({appsPromise}) => {
  const appsData = use(appsPromise)
  return (
    <div className='max-w-300 mx-auto mt-15'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl md:text-5xl font-bold mb-3'>Trending Apps</h1>
        <p className='text-[18px]'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6'>
        {
          appsData.slice(0,6).map((appData, index)=> 
          <TrendingApp 
          appData={appData} 
          key={index}>
          </TrendingApp>)
        }
      </div>
       <Link to={'/apps'} className='grid justify-center mt-5'>
        <button className='btn btn-primary w-40 text-[18px]'>Show All</button>
        </Link>
    </div>
  );
};

export default TrendingApps;
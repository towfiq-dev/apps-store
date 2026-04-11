import React, { use } from 'react';
import TrendingApp from '../trendingApps/TrendingApp';
import { CiSearch } from 'react-icons/ci';

const AppNav = ({appDataPromise}) => {
  const appsData = use(appDataPromise)
  return (
    <div className='max-w-300 mx-auto mt-15'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold mb-5'>{appsData.length} Apps Found</h2>
        <span className='flex items-center justify-between border border-black p-1 rounded -mr-166'>
          <CiSearch  className='cursor-pointer'/>
          <input className='w-60 h-8 rounded' type="text" placeholder='Search Apps'/>
        </span>
        <button className='btn btn-primary w-25'>Search</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6'>
        {appsData.map((appData, index)=>{
        return(
          <TrendingApp 
          appData={appData} 
          key={index}>
          </TrendingApp>
        )
      })}
      </div>
    </div>
  );
};

export default AppNav;
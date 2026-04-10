import React, { use } from 'react';
import TrendingApp from '../trendingApps/TrendingApp';

const AppNav = ({appDataPromise}) => {
  const appsData = use(appDataPromise)
  return (
    <div className='max-w-300 mx-auto mt-15'>
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
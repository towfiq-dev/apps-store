import React from 'react';
import { appsDataFetch } from '../exportDataFetch/DataFetch';
import AppSuspense from '../exportAppContainer/AppSuspense';
import AppNav from './AppNav';

const AppsNav = () => {
  const appDataPromise = appsDataFetch()
  return (
    <div className='mt-8'>
      <div>
        <h1 className='text-center text-[30px] font-bold'>Our All Applications</h1>
         <p className='text-center text-[18px] font-medium'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <AppSuspense>
        <AppNav appDataPromise={appDataPromise}></AppNav>
      </AppSuspense>
    </div>
  );
};

export default AppsNav;
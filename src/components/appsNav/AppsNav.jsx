import React from 'react';
import { appsDataFetch } from '../exportDataFetch/DataFetch';
import AppSuspense from '../exportAppContainer/AppSuspense';
import AppNav from './AppNav';

const AppsNav = () => {
  const appDataPromise = appsDataFetch()
  return (
    <div>
      <AppSuspense>
        <AppNav appDataPromise={appDataPromise}></AppNav>
      </AppSuspense>
    </div>
  );
};

export default AppsNav;
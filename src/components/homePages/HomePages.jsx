import React, { Suspense } from 'react';
import Banner from '../banner/Banner';
import State from '../stateSection/State';
import TrendingApps from '../trendingApps/TrendingApps';

const appsDataFetch= async()=>{
  const appsRes= await fetch('/data.json')
  return(appsRes.json())
}
const HomePages = () => {
  const appsPromise = appsDataFetch()
  return (
    <div>
      <Banner></Banner>
      <State></State>
      <Suspense>
        <TrendingApps appsPromise={appsPromise}></TrendingApps>
      </Suspense>
    </div>
  );
};

export default HomePages;
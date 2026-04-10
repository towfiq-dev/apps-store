import Banner from '../banner/Banner';
import State from '../stateSection/State';
import TrendingApps from '../trendingApps/TrendingApps';
import { appsDataFetch } from '../exportDataFetch/DataFetch';
import AppSuspense from '../exportAppContainer/AppSuspense';

const HomePages = () => {
  const appsPromise = appsDataFetch()
  return (
    <div>
      <Banner></Banner>
      <State></State>
      <AppSuspense>
        <TrendingApps 
        appsPromise={appsPromise}>
        </TrendingApps>
      </AppSuspense>
    </div>
  );
};

export default HomePages;
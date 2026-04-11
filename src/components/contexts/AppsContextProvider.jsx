import React, { useEffect, useState } from 'react';
import { AppsContext } from './AppsContext';

const AppsContextProvider = ({children}) => {
  const [installApps, setInstallApps] = useState([])
  const [appsData, setAppsData] = useState([]); 
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setAppsData(data))
      .catch((err) => console.error("Data fetch error:", err));
  }, []);
  const data ={
    installApps,
    setInstallApps,
    appsData
  }
  return (
    <AppsContext.Provider value={data}>
      {children}
    </AppsContext.Provider>
  );
};

export default AppsContextProvider;
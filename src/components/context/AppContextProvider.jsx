import React, { useState } from 'react';
import { AppContext } from './AppContext';

const AppContextProvider = ({children}) => {

  const [installApp, setInstallApp] = useState([])

  const data ={
    installApp, 
    setInstallApp
  }
  return (
    <AppContext.Provider value={data}>
    {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
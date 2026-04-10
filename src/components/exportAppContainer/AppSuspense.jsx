import React, { Suspense } from 'react';
import { HashLoader } from 'react-spinners';

const AppSuspense = ({children}) => {
  return (
    <div>
      <Suspense 
      fallback={ 
      <span className='grid justify-center'>
      <HashLoader className='text-8xl' color='#ad46ff'/>
      </span> }>
        {children}
      </Suspense>
    </div>
  );
};

export default AppSuspense;
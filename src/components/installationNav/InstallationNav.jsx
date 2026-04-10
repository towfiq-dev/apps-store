import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaDownload, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const InstallationNav = () => {
  const {installApp, setInstallApp} = useContext(AppContext)
  const handleUnInstall=(app)=>{
    const filterDelete = installApp.filter((apk)=> apk.id !== app.id)
    setInstallApp(filterDelete)
    toast.success(`${app.title} is Successfully UnInstall`)
  }
  if (installApp.length === 0) {
    return (
      <div className='mt-6'>
        <h1 className='text-4xl font-bold text-center'>No Data Available</h1>
      </div>
    )
  }
  return (
    <div className='max-w-7xl mx-auto mt-10 p-4'>
      <div className='flex flex-col gap-4'>
        {installApp.map((app, index) => (
          <div app={app} key={index} 
            className='flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100'
          >
            <div className='flex items-center gap-4'>
              <div className='bg-gray-200 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center overflow-hidden'>
                <img className='w-full h-full object-cover' src={app.image} alt={app.title} />
              </div>
              
              <div>
                <h2 className='text-lg md:text-xl font-bold text-gray-800'>{app.title}</h2>
                <div className='flex items-center gap-4 mt-1 text-sm md:text-base text-gray-500'>
                  <span className='flex items-center gap-1 text-green-500 font-semibold'>
                    <FaDownload className='text-xs' /> {app.downloads}
                  </span>
                  <span className='flex items-center gap-1 text-orange-400 font-semibold'>
                    <FaStar className='text-xs' /> {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            <div>
              <button className='bg-[#00d084] btn hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold transition-colors'
               onClick={()=>handleUnInstall(app)}>
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallationNav;
import React, { use, useContext } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaDownload, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { AppsContext } from '../contexts/AppsContext';
import { toast } from 'react-toastify';

const appPromise = fetch('/data.json').then(appRes=> appRes.json());
const AppDetails = () => {
  const appDetailsData = use(appPromise)
  const {appDetailsId} = useParams()
  
  const expectedApp = appDetailsData.find((app)=> app.id == appDetailsId)
  const {title, image, downloads, ratingAvg, reviews, description, companyName, id} = expectedApp

  const {installApps, setInstallApps} = useContext(AppsContext)

  const handleInstall =()=>{
  const isExistApp = installApps.find((app)=> app.id === id)
  if (isExistApp) {
    return toast.warning(`${title} is all ready install`)
  }
  else{
    setInstallApps([...installApps, expectedApp])
    toast.success(`${title} is successfully installed`)
  }
  }
  
  
  return (
    <div className='mt-20 max-w-300 mx-auto'>
      
    <div className='flex justify-baseline gap-15'>
      <div className='bg-gray-200 p-8 rounded-xl'>
        <img className='w-70 h-70 rounded-full' src={image} alt="" />
      </div>
      <div>
        <h2 className='text-3xl font-bold mb-3'>{title}</h2>
        <h2 className='text-[18px] mb-6'> Developed by <small className='text-[18px] text-green-500 font-semibold'>{companyName}</small> 
        </h2>
        <hr />
        <div className='flex gap-15 mt-15'>
        <span >
        <FaDownload className='text-4xl text-green-500 font-bold mb-3'></FaDownload>
        <p className='mb-3'>Downloads</p>
        <h2 className='text-4xl font-bold mb-3'>{downloads}</h2>
        </span>
        <span>
          <FaStar className='text-4xl font-bold mb-3 text-green-500'></FaStar>
          <p className='mb-3'>Average Ratings</p>
          <h3 className='text-4xl font-bold mb-3'>{ratingAvg}</h3>
        </span>
        <span>
          <BiLike className='text-green-500 text-4xl font-bold mb-3' />
          <p className='mb-3'>Total Reviews</p>
          <h3 className='text-4xl font-bold mb-3'>{reviews}</h3>
        </span>
        
        </div>
        <button 
        className='btn mt-3 btn-primary'
        onClick={handleInstall}
        >
          Install Now (291 MB)
          </button>
      </div>
    </div>
    <hr className='mt-6 mb-5'/>
    <span>
      <h3 className='text-[25px] font-bold mb-2'>Description</h3>
      <p className='text-gray-500 text-[18px] mb-5'>{description}</p>
    </span>
    </div>
  );
};

export default AppDetails;
import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import BannerImg from '../../assets/asset/hero.png'
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
  <div className='max-w-300 mx-auto mt-15'>
    <div className='text-center max-w-180 mx-auto'>
      <h1 className="text-3xl md:text-5xl font-bold">We Build <br /> Productive Apps</h1>
      <p className="py-6">
      At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
    </div>

    <div className='flex justify-center gap-10 mb-10'>
      <Link to={'/apps'}>
      <button className="btn btn-primary">
        <IoLogoGooglePlaystore /> 
        Google Play
      </button>
      </Link>
      <Link to={'/apps'}>
      <button className="btn btn-primary">
        <FaAppStoreIos />
        App Store
      </button>
      </Link>
    </div>

    <div className='flex justify-center'>
      <img src={BannerImg} alt="" />
    </div>
  </div>
  );
};

export default Banner;
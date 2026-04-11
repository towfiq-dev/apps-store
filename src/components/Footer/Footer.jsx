import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import FooterLogo from '../../assets/asset/navLogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white py-7 px-10 mt-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-5 border-b border-gray-800">

          <div className="flex items-center gap-3">
            <img  src={FooterLogo} alt="Hero.io Logo" />
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
              Social Links
            </h3>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-700 transition-all duration-300 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300 text-2xl">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
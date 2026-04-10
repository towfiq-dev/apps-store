import React from 'react';
import { FaGithub } from 'react-icons/fa';
import NavbarStructure from './NavbarStructure';
import NavLogo from '../../assets/asset/navLogo.png' 
const Navbar = () => {
  const links = 
  <div className='flex justify-center gap-6'>
    <NavbarStructure to={'/'}>Home</NavbarStructure>
    <NavbarStructure to={'/apps'}>Apps</NavbarStructure>
    <NavbarStructure to={'/installation'}>Installation</NavbarStructure>
    <NavbarStructure to={'/dashBoard'}>DashBoard</NavbarStructure>
  </div>

  return (
<header className='bg-base-300 shadow-md sticky top-0 z-50'>
  <nav className="navbar max-w-300 mx-auto mt-0.5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img src={NavLogo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] "><FaGithub />Contribute</a>
  </div>
  </nav>
</header>
  );
};

export default Navbar;
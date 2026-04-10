import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarStructure = ({children, to, className}) => {
  return (
    <div>
      <li>
        <NavLink to={to} className={({isActive})=> `${className} ${isActive === true? 'border-2 border-green-500 text-black' : ''}`}>
        {children}
        </NavLink>
      </li>
    </div>
  );
};

export default NavbarStructure;
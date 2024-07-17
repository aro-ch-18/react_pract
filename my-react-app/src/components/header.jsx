import React from 'react';
import image from "../assets/logo.avif"

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 ">
      <ul className="flex space-x-4 justify-around items-center">
        <div>
            <img width="40"  src={image}/>

        </div>
        <div className='flex space-x-3'>
        <li className="text-white hover:text-gray-300">Home</li>
        <li className="text-white hover:text-gray-300">About</li>

        </div>
        <div className='flex space-x-3'>
        <li className="text-white hover:text-gray-300">Log in</li>
        <li className="text-white hover:text-gray-300">Sign up</li>

        </div>

       
      </ul>
    </nav>
  );
}

export default NavBar;

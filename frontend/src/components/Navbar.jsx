import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <h1 className='w-36 cursor-pointer'>EVENT MANAGER</h1>

      <div className='flex items-center gap-6'>
        <div className="group relative">
          <img src={assets.profile_icon} className='w-5 cursor-pointer'/>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from "../assets/assets";

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to = '/'>
        <h1 className='w-36 cursor-pointer'>EVENT MANAGER</h1>
      </Link>
      
      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/events" className="flex flex-col items-center gap-1">
          <p>EVENTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <div className="group relative">
          <Link to="/Login">
            <img src={assets.profile_icon} className='w-5 cursor-pointer'/>
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink className="py-2 pl-6 border-y" to="/">HOME</NavLink>
          <NavLink className="py-2 pl-6 border-y" to="/events">EVENTS</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
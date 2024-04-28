import React from 'react'
import Logo from '../Assets/images/Innohack-logo.png';
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between '>
   <NavLink to="/"><img src={Logo} className='w-44 mt-5 ml-28'/></NavLink> 
    <div className='flex gap-10 font-semibold text-xl text-white self-center mt-4 lg:mr-28'>
<Link className='self-center hidden lg:block'>About us</Link>
<NavLink to="/team" className='self-center hidden lg:block'>Our Team</NavLink>
<a href='https://log-eye-signin-up.vercel.app/'  className='bg-[#3a5387] text-white px-5 rounded-3xl py-1 mx-auto'>Sign-In/Up<span className='text-2xl'>&#8594;</span></a>
    </div>

    </div>
  )
}

export default Navbar

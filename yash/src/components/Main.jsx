import React from 'react'
import {Link} from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import FrontImage from "../Assets/images/front-image.jpg";
const Main = () => {
  return (
    <div className="  flex flex-col lg:flex-row  mx-10 mt-20">
    <div className='flex flex-col text-white'><h1 className='text-[3rem]  md:text-6xl lg:text-7xl font-bold'>Observe everything
from anywhere.</h1>
<p className='mt-14 text-gray-400 text-3xl '>Trusted observability, database,
and service management solutions
- ready for every transformation.</p>
<a href='https://log-eye-signin-up.vercel.app/'  className='text-2xl bg-[#3a5387] w-72 text-white  px-3 lg:px-5 rounded-3xl py-1 my-5'><span className='inline'><center></center>Explore the Platform <span className='text-2xl'>&#8594;</span></span></a>
 </div>
    <img src={FrontImage} className='w-[850px]'/>
    </div>
  )
}

export default Main;

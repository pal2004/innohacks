import React from 'react';
import Shephali from "../Assets/Team_images/shephali.jpg";
import Vijay from "../Assets/Team_images/vijay.jpg";
import Shreevesh from "../Assets/Team_images/shreevesh.jpg";
import Yash from "../Assets/Team_images/yash.jpg";
import "./cards.css";

const Cards = () => {
  return (
    <div className='grid grid-cols-2 items-center bg-[#13192a] mx-20'>
        <div className=' flex flex-col gap-5 w-[550px] h-[90vh] rounded-xl items-center p-6 m-10 cards bg-[#3a5387] '>
            <img src={Shephali} className='rounded-full w-[250px]'/>
            <p className='text-gray-300 font-semibold text-2xl '>Shephali Srivastva(Team Lead)</p>
            <p className='text-white'>As the leader overseeing the machine learning, NLP, and visualization aspects of our group project, my role is to provide guidance and support to the team. I'll facilitate collaboration, ensuring that everyone has the resources they need to contribute their best work. Additionally, I'll take responsibility for coordinating tasks, managing timelines, and ensuring that our  on track.</p>
            <button className='text-xl font-bold bg-[#13192a] text-white w-[180px] py-3 rounded-2xl'><a href="https://www.linkedin.com/in/shephsri?trk=blended-typeahead" target="_blank">Connect</a></button>
       </div> 
       
       <div className='flex flex-col gap-5 w-[550px] rounded-xl h-[90vh] items-center p-6 m-10 cards bg-[#3a5387] '>
            <img src={Yash} className='rounded-full w-[250px]'/>
            <p className='text-gray-300 font-semibold text-2xl '>Yash Kumar Aggarwal</p>
            <p className='text-white'>In our group project, I take on the responsibility of developing web pages and managing the frontend. My role involves crafting the visual elements of the website, ensuring a seamless user experience, and integrating various models to enhance functionality. Through my frontend development expertise, I contribute to the overall success of the project by creating an engaging and secure online platform.</p>
            <button className='text-xl font-bold bg-[#13192a] text-white w-[180px] py-3 rounded-2xl'><a href="https://www.linkedin.com/in/yash-aggarwal-519658265/" target="_blank">Connect</a></button>
       </div>
       <div className='flex flex-col gap-5 w-[550px] h-[90vh] rounded-xl items-center p-6 m-10 cards bg-[#3a5387] '>
            <img src={Shreevesh} className='rounded-full w-[250px]'/>
            <p className='text-gray-300 font-semibold text-2xl '>Shreevesh Kumar</p>
            <p className='text-white'>In this group project, I am responsible for implementing security measures and seamlessly integrating models to enhance website functionality while ensuring it remains protected against potential vulnerabilities. My expertise significantly contributes to our team's success by maintaining a secure and robust online presence.</p>
            <button className='text-xl font-bold bg-[#13192a] text-white w-[180px] py-3 rounded-2xl'><a href="https://www.linkedin.com/in/wait-work" target="_blank">Connect</a></button>
       </div>
       <div className='flex flex-col gap-5 w-[550px] h-[90vh] rounded-xl items-center p-6 m-10 cards bg-[#3a5387] '>
            <img src={Vijay} className='rounded-full w-[250px]'/>
            <p className='text-gray-300 font-semibold text-2xl '>Vijay Kumar Chaurasia</p>
            <p className='text-white'>In our group project, I specialize in integrating machine learning models into the website. My role revolves around seamlessly incorporating these models to enhance website functionality and user experience. I collaborate closely with the frontend developer to ensure smooth integration and optimal performance. Additionally, I work with our cybersecurity expert to address any security concerns related to the integration process.</p>
            <button className='text-xl font-bold bg-[#13192a] text-white w-[180px] py-3 rounded-2xl'><a href="https://www.linkedin.com/in/vijay-kumar-chaurasiya-494408253/" target="_blank">Connect</a></button>
       </div>
      
    </div> 
  )
}

export default Cards

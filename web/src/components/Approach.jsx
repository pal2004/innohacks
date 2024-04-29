import React from 'react';
import "./approach.css";

const Approach = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-white text-6xl font-semibold mx-auto text-center  mt-20'>Our Approach</h1>
        <div className=' flex flex-col lg:flex-row  mx-10 gap-10 mt-20'>

            <article className='gap-10 flex flex-col article'> 
            <h1 className='text-3xl text-white font-bold heading mt-5'>Comprehensive Logging</h1>
            <p  className='text-white mx-10 mb-5'>In our pursuit of fortifying security, Log-Eye goes the extra mile by capturing a diverse range of activities within both the Windows operating system and network infrastructure. From user logins to file modifications, network connections to application executions, no aspect escapes our meticulous logging.</p>
            </article>

            <article className='gap-10 flex flex-col article'> 
            <h1 className='text-3xl text-white font-bold heading mt-5'>Real-time Monitoring</h1>
            <p  className='text-white mx-10 mb-5'> Log-Eye Project engages in real-time monitoring, actively scanning for anomalies and suspicious patterns as they occur. This proactive approach allows for swift detection of potential threats, empowering organizations to respond immediately before any damage is done</p>
            </article>

            <article className='gap-10 flex flex-col article'> 
             <h1 className='text-3xl text-white font-bold heading mt-5'>User Protection</h1>
             <p  className='text-white mx-10 mb-5'>Log-Eye's logs serve as a shield for users, identifying and mitigating risks that could jeopardize their data or privacy. By diligently monitoring activities, including user logins and access attempts, Log-Eye ensures that unauthorized actions are swiftly addressed, minimizing the potential impact on users.</p>
            </article>
        </div>
      
    </div>
  )
}

export default Approach

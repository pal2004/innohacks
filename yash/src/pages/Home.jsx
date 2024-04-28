import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Approach from '../components/Approach';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='bg-[#13192a]'>
      <Navbar />
    <Main/>
    <About/>
    <Approach/>
    <Footer/>
    </div>
  )
}

export default Home

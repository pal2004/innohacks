import React from 'react';
import Home from './pages/Home';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Team from './pages/Team';
import Upload from './pages/Upload';
import SignIn from './pages/SignIn';


const App = () => {
  return (
    <div className='bg-[#13192a]'>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/team" element={<Team/>}/>
  <Route path="/upload" element={<Upload/>}/>
  <Route path="/signin" element={<SignIn/>}/>
  
</Routes>


    </div>
  )
}

export default App

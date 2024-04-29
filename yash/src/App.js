import React from 'react';
import Home from './pages/Home';

import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Team from './pages/Team';



const App = () => {
  return (
    <div className='bg-[#13192a]'>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/team" element={<Team/>}/>

  
</Routes>


    </div>
  )
}

export default App

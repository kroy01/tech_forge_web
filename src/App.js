import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
import NavBar from './Components/Navbar';
import AboutUs from './Components/Insights/Insights';
import Projects from './Components/Schedule/Schedule';
import Events from './Components/Samp1/Samp1';
import Timeline from './Components/Timeline/Timeline';
import Sponsors from './Components/Samp3/Samp3';
// import ToggleCircle from './Components/Resources/ToggleCirc';
import backgroundlight from "./Components/Resources/background_light.png";
import backgrounddark from "./Components/Resources/background_dark.png";
// import { useEffect } from 'react';

import './Components/Fonts/Aquire-BW0ox.otf';
import './Components/Fonts/xspace-xspace-400.ttf';

function App() {
  const darkmode = true;
  

  return (
      <div className='mainpg' style={{ backgroundImage: `url(${darkmode ? backgrounddark : backgroundlight})` }}>
        <Router>
          <NavBar />          {/* Toggle Button prop here */}
          <Routes>
            <Route path='/' element={<Home color={darkmode ? "white" : "#252525"} />} />
            <Route path='/insights' element={<AboutUs color={darkmode ? "white" : "#252525"} />} />
            <Route path='/schedule' element={<Projects color={darkmode ? "white" : "#252525"} />} />
            <Route path='/samp1' element={<Events color={darkmode ? "white" : "#252525"} />} />
            <Route path='/samp2' element={<Timeline darkmode={darkmode} />} />
            <Route path='/samp3' element={<Sponsors color={darkmode ? "white" : "#252525"} />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
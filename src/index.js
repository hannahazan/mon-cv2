import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Landing from './pages/landingPage.js'
import WayToGoFlappy from './path/WayToGoFlappy.js';
import WayToGoProjet3 from './path/wayToGoProjet3.js';
import WayToGoPasswordGenerator from './path/WayToGoPasswordGenerator.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/mon-cv2" exact element={<Landing />}/>
        <Route path='/flappyBird' exact element={<WayToGoFlappy />}/>
        <Route path='/projet3' exact element={<WayToGoProjet3/>}/> 
        <Route path='/PasswordGenerator' exact element={<WayToGoPasswordGenerator/>}/> 
    </Routes>
  </BrowserRouter>
);


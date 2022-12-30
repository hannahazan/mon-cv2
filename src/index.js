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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/mon-cv2" exact element={<Landing />}/>
    </Routes>
  </BrowserRouter>
);


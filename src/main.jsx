import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './routes/App';
import Homepage from './routes/Homepage';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';
import "./sass/App.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Homepage />} />
            <Route path='destination' element={<Destination />} />
            <Route path='crew' element={<Crew />} />
            <Route path='technology' element={<Technology />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
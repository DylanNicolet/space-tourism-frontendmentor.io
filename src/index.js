import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './routes/App';
import Homepage from './routes/Homepage';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
);
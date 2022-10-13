import React from 'react';
import '../sass/App.css';
import {Outlet} from "react-router-dom";
import Header from '../layout/Header';

export default function App() {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
}

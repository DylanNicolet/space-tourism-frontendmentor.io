import React from 'react';
import '../sass/App.scss';
import {Outlet} from "react-router-dom";
import Header from '../layout/Header';
import { useDispatch } from "react-redux"
import { updateScreenWidth } from "../redux/webConfigSlice";


export default function App() {
  const dispatch = useDispatch()

  //Screen width tracker (Updates redux store live)
  React.useEffect(() => {
    function handleResize(){
      dispatch(updateScreenWidth(window.innerWidth))
    }

    window.addEventListener("resize", handleResize)
  },[])

  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
}

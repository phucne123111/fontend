import React from 'react';
import '../styles/sidebar.css'
import { Link } from "react-router-dom";


function SideBar() {
  function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
  }

  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }

  return (
    <>
    <div className="sidebar">
    <Link to="/" className="active">Home</Link>
    <Link to="/mentee" className="">Mentee</Link>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  
  </>

  );
}

export default SideBar;

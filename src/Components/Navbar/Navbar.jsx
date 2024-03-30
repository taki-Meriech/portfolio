import React from 'react'
import { BsMoon } from "react-icons/bs";
import './Navbar.css'
import { TbWorldWww } from "react-icons/tb";

function Navbar() {
  return (
    <div className='containerNav'>
        <div className="leftNav">
            <TbWorldWww size={30}/>
    <h1>Taki Eddine</h1></div>

    <ul>
        <li className='classes'><a href="#specializecontainer">Services</a></li>
        <li className='classes'><a href="#Myworkscontainer">Portfolios</a></li>
        <li className='classes'><a href="#exp_container">Experience</a></li>
        <li className='classes'><a href="#Formcontainer">Contact me</a></li>
    </ul>
    <div className='RightNav'> <button className='dark'><BsMoon /></button>
    <button className='resume'>Resume</button>
    </div>
    </div>
  )
}

export default Navbar

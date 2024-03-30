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
        <li className='classes'><a href="">Services</a></li>
        <li className='classes'><a href="">Portfolios</a></li>
        <li className='classes'><a href="">Experience</a></li>
        <li className='classes'><a href="">Blog</a></li>
    </ul>
    <div className='RightNav'> <button className='dark'><BsMoon /></button>
    <button className='resume'>Resume</button>
    </div>
    </div>
  )
}

export default Navbar
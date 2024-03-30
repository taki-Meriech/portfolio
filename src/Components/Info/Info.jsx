import React from 'react'
import'./info.css'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import image1 from   '../../assets/front.png'




function Info() {
  return (
    <div className='containerInfo'>
        <div className='textpart'>
            <p className='myname'>- MY NAME IS </p>
            <h1>Taki Eddine <span>Meriech</span></h1>
            <p className='presentation'> Telecommunication student and Creative Web Devloper in his start of his carrer <br />.Proficient in Javascript ,react and NodeJS</p>
            <ul className='social media'>
                <li><a className='link' href=""><FaInstagram size={25}/></a></li>
                <li><a className='link' href=""><FaGithub size={25}/></a></li>
                <li><a className='link' href=""><IoLogoLinkedin size={25}/></a></li>
            </ul>
        </div>
        <div className="imgpart">
            <img src={image1} alt="img" className='img1'/>
        </div>
    </div>
  )
}

export default Info
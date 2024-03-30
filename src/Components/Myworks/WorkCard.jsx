import React from 'react'
import './Myworks'
import { IoLinkSharp } from 'react-icons/io5'
import  projectimg from '../../assets/Portfolio item.jpg'
function WorkCard() {
  return (
    <div className='Projects'>
    <img src={projectimg} alt="img" />
    <div className="infos">

    <h2>Agency Website</h2>
    <div className='links'>
        <button> WordPress</button>
        <IoLinkSharp />
    </div>
    </div>
</div>
  )
}

export default WorkCard
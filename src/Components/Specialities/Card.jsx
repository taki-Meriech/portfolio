import React from 'react'
import './Specialities'
import icon from '../../assets/Icon.png'

function Card() {
  return (
    <div className="inside">
        <img src={icon} sizes={25} alt="icon" className="specialitie" />
        <h2 className="title"> Web devolepment</h2>
        <p className="descreption">
          {" "}
          Create and mentain your websites and also take care of its performance
          and trafic capacity{" "}
        </p>
      </div>
  )
}

export default Card
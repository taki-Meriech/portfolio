import React from 'react'
import'./Form.css'
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";


function Froms() {
  return (
    <div className='Formcontainer' id='Formcontainer'>
        <div className='Right'>
                <input type="text" name="name" id="name" placeholder='Name' className='input' />
                <input type="email" name="email" id="email" placeholder='Email' className='input'/>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='input'></textarea>
                    <button>Send Message</button>
        </div>
        <div className="Left">
            <div className='constructions'>
            <FiPhone />
            <div className='texts'>
                <strong> Phone</strong>
                <p>0555324471</p>
            </div>
            </div>
            <div className='constructions'>
            <HiOutlineMail />
            <div className='texts'>
                <strong>Email</strong>
                <p>Tmeriech@gmail.com</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Froms

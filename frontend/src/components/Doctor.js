import React from 'react'
import './speciali.css';
import { FaThumbsUp } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';
import { IoIosCheckmarkCircle } from 'react-icons/io';const Doctor = ({info,spec}) => {
  return (
   <>
   <div className='doctor'>
    <div className='image-container'>
    <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*100)+1}.jpg`} alt='doctor'/>
    <div className="tick-icon">
                    <IoIosCheckmarkCircle color='purple'/>
                </div>
    </div>
    <div className='details'>
    <div className='details-top'>
        <p id="name">Dr. {info.Name}</p>
        <p>{spec}</p>
        <p>{info.Exp} years of Experience overall</p>
        <p><b>Dehradun</b> {info.Clinic}</p>
        <p>₹{info.Fee} Consultation fee</p>
        </div>


        <div className='details-bottom'>
            <div id='likebtn'>
                <FaThumbsUp style={{padding:'0 5px'}}/>
                
                {Math.floor(Math.random()*100)+1}%
            </div>
            <div id='story'>
            {Math.floor(Math.random()*100)+1} patient stories
            </div>
            
        </div>
    </div>
    <div className='avail'>
        <div className='avail-top'>
        <IoMdCalendar/> Available Today
        </div>
        <button>
           <b>Book an Appointment<br>
           </br>
           No Booking fee</b>
        </button>

    </div>
   </div>
   </>
  )
}

export default Doctor
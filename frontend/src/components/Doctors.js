import React from 'react'
import { useLocation } from "react-router-dom";
import Doctor from './Doctor';
const Doctors = () => {
    const location=useLocation();
    const data = location.state;
    console.log(data);
  return (
   <>
   <div className='doctors'>
    
    {data.Doctors.map((d)=>
        <Doctor info={d} spec={data.spec}/>
    )}

   </div>
   </>
  )
}

export default Doctors
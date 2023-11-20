import React from 'react'
import './speciali.css';
import { useNavigate } from "react-router-dom";

const SpecialiComponent = ({data}) => {
    const navigate=useNavigate();
    const newData={
        spec : data.Specialization,
        Doctors : data.Doctors
    }
    const handlleClick=()=>{
        navigate("/doctors", { state: newData});
    }
  return (
    <>
    <div className='card' onClick={handlleClick}>
        <img src={data.image} />
        <h4>{data.Specialization}</h4>
        <p>Lorem ipsum lorem ipsum dolor slit lorem</p>
    </div>
    </>
  )
}

export default SpecialiComponent
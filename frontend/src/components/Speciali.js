import {React,createContext,useContext} from 'react'
// const DataContext=createContext();
import { DataContext } from '../App';
import './speciali.css';
import SpecialiComponent from './SpecialiComponent';
const Speciali = () => {
  const data=useContext(DataContext);
  console.log(data);
  return (
    <>
    <div className='home'>
    <h3 style={{paddingLeft:'30px',margin:'0',paddingTop:'5px'}}>Book an appointment for an in-clinic Consultation</h3>
    <p style={{paddingLeft:'30px',margin:'0',paddingTop:'5px'}}>Find experienced doctors across all specialities</p>
    
    <div className='speacializations'>
    
      {data.map((s)=>
      <SpecialiComponent data={s}/>
      )}
    </div>
    </div>
    </>
  )
}

export default Speciali;
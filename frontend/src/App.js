import logo from './logo.svg';
import './App.css';
import {createContext, useContext,useState,useEffect} from 'react';
import Speciali from './components/Speciali';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Doctors from './components/Doctors';
export const DataContext = createContext(null);

function App() {
  const [data,setData]=useState();
  const fetchApi=async()=>{
    const res= await fetch('http://localhost:3001/api/specializations');
    const d=await res.json();
    console.log(d);
    setData(d);
  }
  useEffect(()=>{
    fetchApi();
    //console.log(data);
    
  },[])
  return (
    <>
    {data && <>
    <DataContext.Provider value={data}>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Speciali />} />
          <Route path="/doctors" element={<Doctors />} />
       
      </Routes>
      
      {/* {data && <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*100)+1}.jpg`} alt="img"/>} */}
      </BrowserRouter>
    </DataContext.Provider>
    </>
    }
    </>
  );
}

export default App;

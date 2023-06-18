import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [ office ] = useState('office');
  const [ party ] = useState('party');
  const [ family ] = useState('family');
  const [gottenText, setGottenText ] = useState({
    excuse: 'In need of an excuse?',
    id: 1,
  });

  const getParty =() =>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${party}/`)
    .then((res) => {
      console.log(res.data[0])
      setGottenText(res.data[0])
    })
  }

  const getFamily =() =>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${family}/`)
    .then((res) => {
      setGottenText(res.data[0])
    })
  }

  const getOffice =() =>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${office}/`)
    .then((res) => {
      setGottenText(res.data[0])
    })
  }
  

  return (
    <div>
       <button
       onClick={getParty}
       >
        party 
       </button><br />

       <button
       onClick={getFamily}
       >
        family
       </button><br />

       <button
       onClick={getOffice}
       >
        Office
       </button><br />

       <h5>{ gottenText?.excuse }</h5>
       <h5>{ gottenText?.category }</h5>
    </div>
)
}

export default App;

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [ text, setText ] = useState('');
  const [gottenText, setGottenText ] = useState({});

const getPredict=() =>{
  axios.get(`https://api.agify.io/?name=${text}`)
  .then((res) => {
    console.log(res.data)
      setGottenText(res.data); 
  })
}
  

  return (
    <div>
        <input 
        defaultValue={text}
        onChange={(e) =>{setText(e.target.value)}}
        />
        <button
        onClick={ getPredict }
        >
            Predict Age
        </button>
        <h5>Name: { gottenText?.name }</h5>
        <h5>Age: { gottenText?.age }</h5>
        <h5>Count: { gottenText?.count }</h5>

    </div>
)
}

export default App;

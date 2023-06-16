import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [fact, setFact] = useState('');

  useEffect(() => {
    fetchCatFact();
  }, [])

  const fetchCatFact =() =>{
    Axios.get('https://catfact.ninja/fact').then((res) =>{
    setFact(res.data.fact);
  })
  }
  

  return (
    <div className="App">
     <button onClick={ fetchCatFact }>Generate Cat Fact</button>
     <p>{ fact } </p>
    </div>
  );
}

export default App;

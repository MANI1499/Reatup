import { useState, useEffect } from "react";

const Text =() =>{

const [text, setText] = useState('');

useEffect(() => {
    console.log('component mounted');

    return () => {
        console.log('compo unmounted');
    }
}, []);
 
    return (
        <div>
            <input 
                onChange={(e) =>{
                    setText(e.target.value);
                }}
            />
            <h1>{ text } </h1>
        </div>
    )

}

export default Text;
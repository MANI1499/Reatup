import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";



function GetDetails() {

    const [ text, setText ] = useState('');
    const [gottenText, setGottenText ] = useState('');

const getPredict=(d) =>{
    axios.get(`https://api.agify.io/?name=${d}`)
    .then((res) => {
        setGottenText(res.data.age); 
    })
}

    return (
        <div>
            <input 
            defaultValue={text}
            onChange={(e) =>{setText(e.target.value)}}
            />
            <button
            onClick={ getPredict(text) }
            >
                Predict Age
            </button>
            <h5>{ gottenText }</h5>

        </div>
    )
}

export default GetDetails;
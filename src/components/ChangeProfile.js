import { useState, useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = (props) => {
    const {setUsername } = useContext(AppContext);

    const [currentname, setCurrentName ] = useState('');



    return (
        <div>
            <input 
                onChange={(e) =>{setCurrentName(e.target.value)}}
            />
            <button
            onClick={() =>{ 
                setUsername(currentname) ;
            }}
            >
                Set Profile Name
            </button>
        </div>
    )
}; 
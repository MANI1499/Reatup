import { useContext } from "react";
import { AppContext } from "../App";

import { ChangeProfile } from "../components/ChangeProfile"

export const Home =(props)=>{
    const { username } = useContext(AppContext);


    return(
        <div>This is the home user : { username } 
        <ChangeProfile  />
        </div>
    )
}

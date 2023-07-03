import { useState } from "react";

export const useCount = () =>{
    const [start, setStart] = useState(0);

    const inCrease = () =>{
        setStart( start + 1);
    }

    const deCrease = () =>{
         setStart(start - 1)
    }

    const refresh = () =>{
         setStart(0);
    }


    return{ start, inCrease, deCrease, refresh }
}
import { useCount } from "./useCount";

export const Count = () =>{
    const { start, inCrease, deCrease, refresh} = useCount();

    return(
        <div>
            <h1> { start } </h1>
            <button
                onClick={ inCrease }
            > Increase </button>
             <button
                onClick={ deCrease }
            > Decrease </button>
             <button
                onClick={ refresh }
            > Set to 0 </button>
        </div>
    )
}
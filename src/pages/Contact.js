import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Contact= () =>{
    const { data:catData, isLoading, isError, refetch } = useQuery(['cat'],  () =>{
        return Axios.get('https://catfact.ninja/fact')
        .then((res) =>
            res.data
        )
    });

    return <div>
        { isError && <h1>Sorry 404 Error </h1>}

        { isLoading && <h1>Loading...</h1> }
        
        This is the Contact Page <p> { catData?.fact } </p>

        <button onClick={ refetch }>Gen Fact</button>
    </div>

}
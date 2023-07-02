/**this is a custom hook for react query 
 * for getting and loading data
 */

 import { useQuery } from 'react-query';
 import Axios from "axios";
 
 export const useGetCat = () => {

   

    const fetchCat = async() =>{
       const res = await Axios.get('https://catfact.ninja/fact')
        return res.data;
    }

     const {
         data,
          refetch,
           isLoading,
            isError } = useQuery(['cat'], fetchCat); 
 
     const refetchData = () =>{
         alert('Data refetched');
         refetch();
     }
 
     return {data, refetchData, isLoading , isError };
 }
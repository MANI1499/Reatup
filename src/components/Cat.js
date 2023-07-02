
import { useGetCat } from './useGetCat';

export const Cat =() =>{
    
    const { 
        data:catData,
         refetchData, 
         isLoading,
    isError } = useGetCat();
    
    

    return (
        <div>
             <button
                    onClick={ refetchData }
                >
                    Get Cat Fact
                </button>
            <h1>
                { isError && <h1>... OOps Error Occured</h1>}
                {isLoading && <h1>... Loading </h1>}
                { catData?.fact}
               
            </h1>

        </div>
    )
};
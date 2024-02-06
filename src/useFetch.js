import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    setIsPending(false);
                    throw Error("couldn't fectch the data from the resources");
                }
                return res.json();
                
            })
            .then(data =>{
                // console.log(data.children);
                setData(data);
                setIsPending(false);
                // console.log(data);
            })
            .catch(err=>{
                setIsPending(false);
                setError(err.message);
            })
    },[url]);
    return {data, isPending, error};
}
 
export default useFetch;
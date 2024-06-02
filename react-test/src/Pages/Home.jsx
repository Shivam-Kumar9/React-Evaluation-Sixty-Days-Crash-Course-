import { useState, useEffect } from "react"

export default function Home(){
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
     
     async function fetchDataUpdate(){
        setLoading(true)
        try{
            const res = await axios({
                method: 'get',
                url : 'https://fakestoreapi.com/products'
            })
            setData(res?.data)
            console.log(res.data);
            setLoading(false)
            
        }
        catch(error){
           setError(true)
           setLoading(false)
        }
     }

     useEffect(()=>{
        fetchDataUpdate()
     },[])
       console.log(data);

     if(loading){
        return(<h1>Loading...</h1>)
     }
     if(error){
        return(<h1>something went wrong</h1>)
     }

    return(<><h1>Home page</h1>
    
    
    </>)
}
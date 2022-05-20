import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailCrypto = ()=> { 
    const {id} = useParams();
    const [crypto,setCrypto] = useState(null);
    const [loading, setLoading] = useState(false)
  

    useEffect(()=> {
        const fetchApiById = ()=> { 
            setLoading(true)
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(({data})=> {
                console.log('esto es data', data)
                setCrypto(data)
                setLoading(false)
            });
        } 
       fetchApiById();
    },[id])

    return (
        <>
        
         { 
            loading ? (
                <h1> ESTOY CARGANDO </h1>
            ) : 
                (   
                    <div>
                    <div> 
                         <img  src={crypto?.image.large} alt="crypto"/> 
                    </div>
        
                    </div>
                )


         }
       </>
    )
}


export default DetailCrypto; 
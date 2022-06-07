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
    console.log('ESTO ES CRYPTO',crypto)
    return (
        <>
        
         { 
            loading ? (
                <h1> Loading... </h1>
            ) : 
                (   
                    <div>
                        <div>   
                    <div> 
                         <img  src={crypto?.image.large} alt="crypto"/> 
                    </div>
                        <div> 
                            <h1>{crypto?.symbol}</h1>
                            <h2>{crypto?.name}</h2>
                        </div>
                        </div>
                        <div> 
                            <h3> {`${'Market capitalization '}${'$'}${crypto?.market_data.market_cap.usd}`}</h3>
                            <h3>{`${'High price per 24hs: '}${'$'}${crypto?.market_data.high_24h.usd}`}</h3>
                            <h3>{`${'Low pricer per 24hs: '}${'$'}${crypto?.market_data.low_24h.usd}`}</h3>
                        </div>
                    </div>
                )


         }
       </>
    )
}

//hola chicos buenas tardes !!
 // holi
 //como estas?
 //tirando, vos?
 //tambien tirando para no aflojar y aflojando pa que no se corte 
 //a la gilada ni cabida
 //jajajajja, aguante la mona 
 // y el vino en carton jajaj
 //ricasoo culiaaaaa
 // sale esa sangria ! 
export default DetailCrypto; 
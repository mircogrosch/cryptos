import React from "react";
import Card from "../Card/Card";
import style from './CardsContainer.module.css';

const CardsContainer = ({response})=> { 
    return(
        <div className={style.root}>
        { response.map((crypto)=> { 
            return (
                <Card image={crypto.image} 
                key={crypto.id}
                id={crypto.id}
                name={crypto.name} 
                price_change_percentage_24h={crypto.price_change_percentage_24h} 
                symbol={crypto.symbol} 
                current_price={crypto.current_price}/>
            )
        } )}
        </div> 
       
    );
}

export default CardsContainer;
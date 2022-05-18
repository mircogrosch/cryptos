import React from "react";
import style from './Card.module.css';

const Card = ({image,symbol,name,current_price,price_change_percentage_24h})=> { 
    return (
        <div className={style.root}> 
            <div className={style.containerImg}> 
                <img src={image} alt='IconCrypto'/>
            </div>
            <div className={style.containerInfo}> 
                <h1> {symbol.toUpperCase()}</h1>
                <h3> {name}</h3>
                <h2> {current_price} </h2>
                <span> {`${price_change_percentage_24h} %`}</span>
            </div>

        </div>
    )
}

export default Card; 
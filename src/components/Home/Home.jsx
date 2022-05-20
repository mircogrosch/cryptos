import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import SearchBar from "../SearchBar/SearchBar";

const Home =({response})=>{ 
    return(
        <>
       <SearchBar /> 
        <CardsContainer response={response}/>
        </>
    ); 
}

export default Home; 
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import axios from "axios";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const fetchApi = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then(({ data }) => {
        setCryptos(data);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <SearchBar />
      <CardsContainer response={cryptos} />
    </>
  );
}

export default App;

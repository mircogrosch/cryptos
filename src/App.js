import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DetailCrypto from "./components/DetailCrypto/DetailCrypto";

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
    <div>
      <Route
        exact
        path="/"
        render={() => {
          return <Home response={cryptos} />;
        }}
      />

      <Route exact path="/crypto/:id" component={DetailCrypto} />
    </div>
  );
}

export default App;

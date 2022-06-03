import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DetailCrypto from "./components/DetailCrypto/DetailCrypto";
import { useSelector, useDispatch } from "react-redux";
import { getCryptos } from "./redux/actions/index";
function App() {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.cryptos);
  useEffect(() => {
    dispatch(getCryptos());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home response={cryptos} />} />

        <Route path="/crypto/:id" element={<DetailCrypto />} />
      </Routes>
    </div>
  );
}

export default App;

import axios from "axios";
import { type } from "./types";
export const getCryptos = () => {
  return function (dispatch) {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then(({ data }) => {
        dispatch({ type: type.GET_CRYPTOS, payload: data });
      });
  };
};

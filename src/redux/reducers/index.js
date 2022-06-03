import { type } from "../actions/types";
const initialState = {
  cryptos: [],
  cryptoDetail: {},
  favs:[]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CRYPTOS: {
      return {
        ...state,
        cryptos: action.payload,
      };
    }
    case type.GET_DETAIL: {
      return {
        ...state,
        cryptoDetail: action.payload,
      };
    }
    // case 

    default: {
      return state;
    }
  }
};

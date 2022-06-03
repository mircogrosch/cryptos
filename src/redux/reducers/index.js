import { type } from "../actions/types";
const initialState = {
  cryptos: [],
  cryptoDetail: {},
  favs:[]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTOS: {
      return {
        ...state,
        cryptos: action.payload,
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        cryptoDetail: action.payload,
      };
    }
    case ADD_FAVS: {
      return{
        ...state,
        favs:[...state.favs, action.payload]
      }
    } 

    case REMOVE_FAVS: {
      return {
        ...state,
        favs: state.favs.filter(crypto => crypto.id !== action.payload)
      }
    }

    default: {
      return state;
    }
  }
};

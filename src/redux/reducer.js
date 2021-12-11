const defaultState = {
  cart: [],
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INSERT_COUNTRY":
      const incomingCountry = action.payload; //country object
      const incomingName = incomingCountry.name;
      //existCountry wud be either an array or undefined
      const existCountry = state.cart.find((country) => {
        if (incomingName === country.name) {
          //country is element of state.cart array
          return true;
        }

        return false;
      });
      if (existCountry) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, incomingCountry],
      };

    case "REMOVE_COUNTRY":
      const countryRemove = state.cart.filter((country) => {
        if (action.payload === country.name) {
          return false;
        }
        return true;
      });

      return {
        ...countryRemove,
      };

    default:
      break;
  }
};

export default countReducer;

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
      return {};

    case "REMOVE_COUNTRY":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      break;
  }
};

export default countReducer;

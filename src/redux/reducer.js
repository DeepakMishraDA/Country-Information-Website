const defaultState = {
  cart: [],
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INSERT_COUNTRY":
      const existCountry = state.cart.find(() => {});
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

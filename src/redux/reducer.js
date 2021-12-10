const defaultState = {
  cart: [],
};

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INSERT_COUNTRY":
      const incomingCountry = action.payload;
      const incomingcountryName = incomingCountry.name;
      return {
        const existCountry = state.cart.find(country=> {
          if (incomingcountryName ===country.name){
            return true
          }
          return false
        })
        if (existCountry){
          return state
        } else{
          return ({
            ...state,
            cart:[...state.cart,incomingCountry]
          })
        }
      }

    case "REMOVE_COUNTRY":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default countReducer;

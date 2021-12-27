import { AllActions, INSERT_COUNTRY } from "../action";
import { Country } from "../types";

type DefaultState = {
  cart: Country[];
  countries: Country[];
  err: true;
};

const defaultState: DefaultState = {
  cart: [],
  countries: [],
  err: true,
};

const countReducer = (
  state = defaultState,
  action: AllActions
): DefaultState => {
  switch (action.type) {
    case INSERT_COUNTRY:
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
      //console.log(state);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_COUNTRY":
      const countryRemove = state.cart.filter((country) => {
        if (action.payload === country.name.common) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        cart: [
          ...countryRemove,
          {
            name: { common: "" },
            continents: [],
            population: 0,
            capital: "",
            flag: "",
          },
        ],
      };

    case "Deliver_Countries":
      const countriespayload = action.payload;
      return {
        ...state,
        countries: countriespayload,
      };
    case "Deliver_Onecountry":
      const countrypayload = action.payload;
      return {
        ...state,
        countries: countrypayload,
      };

    case "Error_Data":
      const errpayload = action.payload;
      return {
        ...state,
        err: errpayload,
      };

    default:
      return state;
  }
};

export default countReducer;

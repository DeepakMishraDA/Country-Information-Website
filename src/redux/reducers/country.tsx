import { AllActions, INSERT_COUNTRY } from "../action";
import { Country, Countr } from "../types";

type DefaultState = {
  cart: Countr[];
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
      const incomingName = incomingCountry.data[0].name.common;
      //existCountry wud be either an array or undefined
      const existCountry = state.cart.find((country) => {
        if (incomingName === country.data[0].name.common) {
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

    // case "REMOVE_COUNTRY":
    //   const countryRemove = state.cart.filter((country) => {
    //     if (action.payload === country.name.common) {
    //       return false;
    //     }
    //     return true;
    //   });

    //   return {
    //     ...state,
    //     cart: [
    //       ...countryRemove,
    //       {
    //         name: { common: "" },
    //         continents: [],
    //         population: 0,
    //         capital: "",
    //         flag: "",
    //       },
    //     ],
    //   };

    case "Deliver_Countries":
      const countriespayload = action.payload;
      return {
        ...state,
        countries: countriespayload,
      };
    case "Deliver_Onecountry":
      const addCountry = action.payload; //country object
      const addName = addCountry.data[0].name.common;
      //existCountry wud be either an array or undefined
      const addedCountry = state.cart.find((country) => {
        if (addName === country.data[0].name.common) {
          //country is element of state.cart array
          return true;
        }

        return false;
      });
      if (addedCountry) {
        return state;
      }
      //console.log(state);
      return {
        ...state,
        cart: [...state.cart, action.payload],
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

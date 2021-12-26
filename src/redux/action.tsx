import axios from "axios";
import { Dispatch } from "redux";

import { Country } from "./types";

export function addCountry(country: Country) {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
}
export function remove(countryName: string) {
  return {
    type: "REMOVE_COUNTRY",
    payload: countryName,
  };
}

// export const saveCartInsert = (country) => {
//   return (dispatch, getState) => {
//     const currentCart = getState().cart;
//     const newCart = [...currentCart, country];
//     localStorage.setItem("cart", JSON.stringify(newCart));
//     dispatch(addCountry(country));
//   };
// };

export const getAllcountries = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const responses = await axios.get("https://restcountries.com/v3.1/all");
      //console.log("And This", responses.data);
      dispatch(deliverAllcountries(responses.data));
    } catch (error) {
      console.log("error", error);
      dispatch(fetchError(error));
    }
  };
};

export function deliverAllcountries(data: Country[]) {
  return {
    type: "Deliver_Countries",
    payload: data,
  };
}
export function deliverAcountry(data: Country) {
  return {
    type: "Deliver_Onecountry",
    payload: data,
  };
}

export const getAcountry = (name: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const response: Country = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      console.log("This", response);
      dispatch(addCountry(response));
      dispatch(deliverAcountry(response));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export function fetchError(data: any) {
  return {
    type: "Error_Data",
    payload: data,
  };
}

type FetchError = {
  type: "Error_Data";
  payload: any;
};

type DeliverAllcountries = {
  type: "Deliver_Countries";
  payload: Country[];
};

type AddCountry = {
  type: "INSERT_COUNTRY";
  payload: Country;
};

type DeliverAcountry = {
  type: "Deliver_Onecountry";
  payload: Country;
};
type Remove = {
  type: "REMOVE_COUNTRY";
  payload: string;
};
export type AllActions =
  | FetchError
  | DeliverAllcountries
  | Remove
  | AddCountry
  | DeliverAcountry;
// type FetchError = ReturnType<typeof fetchError>;
// type GetAcountry = ReturnType<typeof getAcountry>;
// type DeliverAllcountries = ReturnType<typeof deliverAllcountries>;
// type GetAllcountries = ReturnType<typeof getAllcountries>;
// type Remove = ReturnType<typeof remove>;
// type AddCountry = ReturnType<typeof addCountry>;

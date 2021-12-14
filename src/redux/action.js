import axios from "axios";

export function addCountry(country) {
  return {
    type: "INSERT_COUNTRY",
    payload: country,
  };
}
export function remove(countryName) {
  return {
    type: "REMOVE_COUNTRY",
    payload: countryName,
  };
}
export const getAllcountries = () => {
  return async (dispatch, getState) => {
    try {
      const responses = await axios.get("https://restcountries.com/v3.1/all");
      //console.log("And This", responses.data);
      dispatch(deliverData(responses.data));
    } catch (error) {
      console.log("error", error);
      dispatch(fetcherror(error));
    }
  };
};
export function deliverData(data) {
  return {
    type: "Deliver_Countries",
    payload: data,
  };
}
export const getAcountry = (name) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    console.log("This", response);
    dispatch(addCountry(response));
  };
};

export function fetcherror(data) {
  return {
    type: "Error_Data",
    payload: data,
  };
}

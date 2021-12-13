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
export const getData = () => {
  return async (dispatch, getState) => {
    const responses = await axios.get("https://restcountries.com/v3.1/all");
    console.log("And This", responses);
    dispatch(deliverData(responses));
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
    const responses = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    console.log("And This", responses);
  };
};

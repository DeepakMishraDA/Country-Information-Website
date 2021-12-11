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
    console.log(responses);
  };
};

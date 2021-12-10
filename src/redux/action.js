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

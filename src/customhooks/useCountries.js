import { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; //useSelector
import { getAllcountries } from "../redux/action";

function useCountries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => {
    return state.countries;
  });
  const errr = useSelector((state) => {
    return state.err;
  });
  console.log("State:", countries);

  useEffect(() => {
    dispatch(getAllcountries());
  }, [dispatch]);
  //console.log(countries);
  return { countries, errr };
}

export default useCountries;

import { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; //useSelector
import { getAllcountries } from "../redux/action";
import { Store } from "../redux/reducers";

function useCountries() {
  const dispatch = useDispatch();
  const countries = useSelector((state: Store) => {
    return state.countReducer.countries;
  });
  const errr = useSelector((state: Store) => {
    return state.countReducer.err;
  });
  console.log("State:", errr);

  useEffect(() => {
    dispatch(getAllcountries());
  }, [dispatch]);
  //console.log(countries);
  return { countries, errr };
}

export default useCountries;

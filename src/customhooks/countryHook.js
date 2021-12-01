import { useState, useEffect } from "react";
import axios from "axios";

function countryHook() {

    const [countries, setCountry] = useState([]);
    const [error , setErr] = useState();

    useEffect(() => {
    const fetchData = async () => {
        try
        {const responses = await axios.get("https://restcountries.com/v3.1/all");
      console.log(responses.data);
      //const data = JSON.parse(responses);
      setCountry(responses.data);
    }
    catch(error) {
setErr(error)
    }
    fetchData();
  }, []} );
    return [countries, error] 
}

export default countryHook

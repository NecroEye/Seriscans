import { useEffect, useState } from "react";
import axios from 'axios';

function useFetch(url:any){

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {

    try {
      const response: any = await axios.get(url);
      setData(response);
      setLoading(false);
      console.log(response);

    } catch (error: any) {
      setError(error.message);
    }

  };

  useEffect(() => {

    fetchData();

  }, []);

  return {loading, data, error};
}

export default useFetch;

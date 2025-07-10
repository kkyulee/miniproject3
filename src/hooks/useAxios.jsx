import axios from "axios";
import { useEffect, useState } from "react";
const useAxios = (url = "") => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const res = await axios.get(url);
      setState(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return {
    state,
    loading,
    error,
  };
};
export default useAxios;

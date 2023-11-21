import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = ({
  url,
  method,
  data = null,
  formData = null,
  headers = null,
  toWait = false,
}) => {
  const API_ENDPOINT = import.meta.env.VITE_API_DOMAIN;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      axios.defaults.baseURL = API_ENDPOINT;
      const response = await axios({
        method,
        url,
        data: formData ?? JSON.parse(data),
        headers: {
          ...headers,
        },
      });
      setResponse(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const cleanRequests = () => {
    setResponse(null);
    setError(null);
    setLoading(false);
  };
  useEffect(() => {
    let mounted = true;
    if (!toWait && mounted) {
      setResponse(null);
      setError(null);
      setLoading(true);
      fetchData();
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, url, toWait]);
  return { response, error, loading, cleanRequests };
};

export default useAxios;

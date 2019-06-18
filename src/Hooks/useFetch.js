import { useState, useEffect } from "react";
// fetch data
export const useFetch = (initUrl, initResponse) => {
  const [url] = useState(initUrl);
  const [response, setResponse] = useState(initResponse);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return [response, loading, setLoading, error];
};

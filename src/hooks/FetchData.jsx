import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
          setData(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
    setData
  };
};

export default useFetchData;

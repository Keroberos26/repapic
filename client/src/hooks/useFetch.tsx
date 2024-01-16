import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .then((err) => setError(err));
    };
    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data))
      .then((err) => setError(err));
    setLoading(false);
  };

  return { data, loading, error, refetch };
};

export default useFetch;

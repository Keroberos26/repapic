import { useEffect, useRef, useState } from 'react';
import api from '../utils/api';

const useFetch = (url, resetCache = false) => {
  const cache = useRef({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setLoading(true);
      if (cache.current[url] && !resetCache) {
        setData(cache.current[url]);
      } else {
        try {
          const res = await api.get(url);
          setData(res.data);
          cache.current[url] = data;
        } catch (err) {
          setError(err);
        }
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

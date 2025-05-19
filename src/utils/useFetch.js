import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // to clean up fetch on unmount

    async function fetchurl() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://dummyjson.com/products?limit=0", {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`Error: ${res.status} Invalid Url`);
        }
        const result = await res.json();

        setData(result.products);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchurl();
    return () => controller.abort(); // cleanup
  }, []);

  return { data, loading, error };
};
export default useFetch;

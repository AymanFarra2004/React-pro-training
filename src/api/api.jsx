import { useState, useEffect } from 'react';
export default function useApi({ info }) {
  const baseURL = 'https://fakestoreapi.com';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseURL}/${info}`);
        console.log(response)
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const job = await response.json();
        setData(job);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [info]);
  return { data, isLoading, error };
}

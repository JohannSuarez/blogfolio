import './Biometrics.css';
import React, { useState, useEffect } from 'react';

function Biometrics() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch('https://my-api.com/endpoint');
        const json = await response.json();

        setData(json.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return <p>The integer is: {data}</p>;
}

export default Biometrics;

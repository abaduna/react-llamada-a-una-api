import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  } 

  useEffect(() => {
    getData();
  }, []);

  return data;
};


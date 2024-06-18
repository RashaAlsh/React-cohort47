import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]); // to store fetched data from API call

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url); // activeCategory or product list will be fetched 
      const result = await response.json();
      setData(result); // change data to have only desired products or selected category
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]); // trigger useEffect when url changes

  return { isLoading, data }; // return only relevant info (data which stores the product list and filtered products depending on selected category + loading state to show the loading message)
}


export default useFetch
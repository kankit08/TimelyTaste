import { createContext, useContext, useEffect, useState } from "react";


const RestaurantContext = createContext();

export const ResAPIData = ({ children }) => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData Function
  const fetchData = async () => {
    console.log(import.meta.env.VITE_API_BASE_URL);
    const data = await fetch(import.meta.env.VITE_API_BASE_URL);
    const res = await data.json();
    setResData(res);
    
  };

  return (
    <RestaurantContext.Provider value={resData}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);

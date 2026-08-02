import { createContext, useContext, useEffect, useState } from "react";
import { VITE_API_BASE_URL } from "../../.env";

const RestaurantContext = createContext();

export const ResAPIData = ({ children }) => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData Function
  const fetchData = async () => {
    const data = await fetch(`${VITE_API_BASE_URL}`);
    const res = await data.json();
    setResData(res);
    // console.log(res, "ress");
    
  };

  return (
    <RestaurantContext.Provider value={resData}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);

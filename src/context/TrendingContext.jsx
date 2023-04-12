import { createContext, useLayoutEffect, useState } from "react";

export const TrendingContext = createContext({});
// create the provider component
export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  const getTrendingData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      )
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setTrendData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshButton = () => {
    getTrendingData();
  };

  useLayoutEffect(() => {
    getTrendingData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendData,
        refreshButton,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

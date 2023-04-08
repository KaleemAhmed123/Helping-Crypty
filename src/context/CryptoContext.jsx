import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  // const [test, setTest] = useState("hello checking the context");

  const [cryptoData, setCryptoData] = useState(); // for initial crypto page
  const [searchData, setSearchData] = useState(); // for search coin Query result
  const [coinSearch, setCoinSearch] = useState("");

  const getCryptoData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${coinSearch}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      ).then((res) => res.json());

      setCryptoData(data);
      // console.log(cryptoData);
    } catch (error) {
      console.log(error);
    }
  };

  // for result of search Query
  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setSearchData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch]); // when selected by click get

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        coinSearch,
        setCoinSearch,
        getSearchResult,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

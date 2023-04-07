import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [test, setTest] = useState("hello checking the context");

  const getCryptoData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      )
        .then(async (res) => {
          res.json();
        })
        .then((json) => json);

      setCryptoData(data);
      console.log(cryptoData);
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    getCryptoData();
  }, []);

  return (
    <CryptoContext.Provider value={{ test }}>{children}</CryptoContext.Provider>
  );
};

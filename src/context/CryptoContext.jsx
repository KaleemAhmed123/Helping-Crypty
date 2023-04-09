import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  // const [test, setTest] = useState("hello checking the context");

  const [cryptoData, setCryptoData] = useState(); // for initial crypto page

  const [searchData, setSearchData] = useState(); // for search coin Query result

  const [coinSearch, setCoinSearch] = useState(""); // for table result one

  const [currency, setCurrency] = useState("inr"); // for currency and sorting
  const [sortBy, setSortBy] = useState("market_cap_desc");

  const [page, setPage] = useState(1); // for paginatiom
  const [totalPages, setTotalPages] = useState(250);
  const [perPage, setPerPage] = useState(10);

  const getCryptoData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      ).then((res) => res.json());

      setCryptoData(data);
      // console.log(cryptoData);
    } catch (error) {
      console.log("API limit sucks error");
    }
  };

  // for result of coins of search Query
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

  // refresh button
  const resetFunction = () => {
    setPage(1);
    setCoinSearch(""); // clear search issue (1 result)
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perPage]);
  // when selected by click get if empty it will render normal 10 result and if given id the will get 1 result

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,

        searchData,
        setSearchData,
        coinSearch,
        setCoinSearch,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        perPage,
        setPerPage,
        totalPages,
        resetFunction,

        getSearchResult,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

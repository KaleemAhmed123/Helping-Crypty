import React, { useContext } from "react";
import Pagination from "./Pagination";
import { CryptoContext } from "../context/CryptoContext";
import { Link } from "react-router-dom";

const SaveBtn = ({ data }) => {
  // const { saveCoin, allCoins, removeCoin } = useContext(StorageContext);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   saveCoin(data.id);
  //   if (allCoins.includes(data.id)) {
  //     removeCoin(data.id);
  //   } else {
  //     saveCoin(data.id);
  // console.log(data);
  //   }
};

const TableComponent = () => {
  const { cryptoData, currency } = useContext(CryptoContext);
  // const { test } = useContext(CryptoContext);
  // console.log(cryptoData);

  return (
    <>
      <div className="flex flex-col mt-9 border border-gray-100 rounded">
        {cryptoData ? (
          <table className="w-full table-auto">
            <thead
              className="capitalize text-base text-gray-100 
            font-medium border-b border-gray-100"
            >
              <tr>
                <th className="py-1">asset</th>
                <th className="py-1">name</th>
                <th className="py-1">price</th>
                <th className="py-1">total volume</th>
                <th className="py-1">market cap change</th>
                <th className="py-1 lg:table-cell hidden">1H</th>
                <th className="py-1 lg:table-cell hidden">24H</th>
                <th className="py-1 lg:table-cell hidden">7D</th>
              </tr>
            </thead>

            <tbody>
              {cryptoData?.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="text-center text-base border-b border-gray-100 transition-all delay-100
            hover:bg-gray-200 last:border-b-0
            "
                  >
                    {/* has three sections btn, logo, shortName */}
                    <td className="py-4 flex items-center uppercase">
                      <SaveBtn data={data} />
                      <img
                        className="w-[1.2rem] h-[1.2rem] mx-1.5"
                        src={data.image}
                        alt={data.name}
                      />
                      <span>
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.symbol}
                        </Link>
                      </span>
                    </td>

                    <td className="py-4">
                      <Link to={`/${data.id}`} className="cursor-pointer">
                        {data.name}
                      </Link>
                    </td>
                    <td className="py-4">
                      {/* for currency format */}
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                      }).format(data.current_price)}
                    </td>
                    <td className="py-4">{data.total_volume}</td>
                    <td className="py-4">
                      {data.market_cap_change_percentage_24h}%
                    </td>
                    <td
                      className={
                        data.price_change_percentage_1h_in_currency > 0
                          ? "text-green py-4 lg:table-cell hidden "
                          : "text-red py-4  lg:table-cell hidden"
                      }
                    >
                      {Number(
                        data.price_change_percentage_1h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_24h_in_currency > 0
                          ? "text-green py-4 lg:table-cell hidden"
                          : "text-red py-4  lg:table-cell hidden"
                      }
                    >
                      {Number(
                        data.price_change_percentage_24h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_7d_in_currency > 0
                          ? "text-green py-4 lg:table-cell hidden"
                          : "text-red py-4  lg:table-cell hidden"
                      }
                    >
                      {Number(
                        data.price_change_percentage_7d_in_currency
                      ).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1 className="min-h-[60vh] text-lg text-red flex items-center justify-center">
            API Limit Sucks !
          </h1>
        )}
      </div>
      <div className="flex justify-between items-center mt-4 h-[2rem]">
        <span>
          Attribution Free- Data Provided By:
          <a
            href="http://www.coingecko.com"
            className="text-cyan"
            target={"_blank"}
            rel="noreferrer"
          >
            CoinGecko
          </a>
        </span>
        <Pagination />
      </div>
    </>
  );
};

export default TableComponent;

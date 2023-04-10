/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import { CryptoContext } from "../context/CryptoContext";
import Chart from "./Chart";

const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();

  let { getCoinData, coinData: data, currency } = useContext(CryptoContext);

  useLayoutEffect(() => {
    getCoinData(coinId); // calling api from here
  }, [coinId]);

  const close = () => {
    navigate(".."); // last page
  };

  return ReactDOM.createPortal(
    // That Blurred BG
    <div
      className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter:
    backdrop-blur-sm flex items-center justify-center font-nunito
    "
      onClick={close}
    >
      {/* PopUp window (Both Left and Right) */}
      <div
        className="w-[65%] h-[75%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        {data ? (
          <div className="flex items-center justify-between h-full w-full p-4">
            {/* left part */}
            <div className="flex flex-col w-[45%] h-full pr-2 ">
              {/* image name and symbol */}
              <div className="flex w-full items-center">
                <img
                  className="w-[3rem] h-[3rem] mx-1.5"
                  src={data.image.large}
                  alt={data.id}
                />
                <h1 className="text-xl capitalize font-medium">{data.name}</h1>
                <span
                  className="text-sm
        py-0.5 px-2.5 ml-2 bg-cyan text-cyan bg-opacity-25
        rounded uppercase"
                >
                  {data.symbol}
                </span>
              </div>
              {/* end imgNameSymbol */}

              {/* Price and 24h up-Or-down badge spaceBetween and next in H2 that price */}
              <div className="flex w-full mt-6">
                <div className="flex flex-col w-full">
                  {/* spaceBetween */}
                  <div className="flex justify-between">
                    <span className="text-sm capitalize text-gray-100">
                      Price
                    </span>
                    <div
                      className={`text-sm px-1 ml-2 font-medium flex items-center
          rounded uppercase bg-opacity-25
          ${
            data.market_data.price_change_percentage_24h > 0
              ? "bg-green text-green"
              : "bg-red text-red"
          }`}
                    >
                      <span>
                        {Number(
                          data.market_data.price_change_percentage_24h
                        ).toFixed(2)}
                        %
                      </span>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      maximumSignificantDigits: 5,
                    }).format(data.market_data.current_price[currency])}
                  </h2>
                </div>
              </div>

              {/* market cap and Fully diluted copied space between -- */}
              <div className="flex w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    Market Cap
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.market_cap[currency])}
                  </h2>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    fully diluted valuation
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      notation: "compact",
                    }).format(
                      data.market_data.fully_diluted_valuation[currency]
                    )}
                  </h2>
                </div>
              </div>

              {/* Volume Total -- */}
              <div className="flex flex-col w-full mt-4 justify-between">
                <span className="text-sm capitalize text-gray-100">
                  total volume
                </span>
                <h2 className="text-base font-bold">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: currency,
                    minimumFractionDigits: 0,
                  }).format(data.market_data.total_volume[currency])}
                </h2>
              </div>

              {/* That Indicator  */}
              {/* <div className="flex w-full mt-4 justify-between">
                <HighLowIndicator
                  currentPrice={data.market_data.current_price[currency]}
                  high={data.market_data.high_24h[currency]}
                  low={data.market_data.low_24h[currency]}
                />
              </div> */}

              {/* Low 24 and high 24 badge (copyPasted) space between*/}
              <div className="flex w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    Low 24H
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(data.market_data.low_24h[currency])}
                  </h2>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    high 24H
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 5,
                    }).format(data.market_data.high_24h[currency])}
                  </h2>
                </div>
              </div>

              {/* maxSupply and circulatingSupply copiedSame space between */}
              <div className="flex w-full mt-4 justify-between">
                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    max supply
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.max_supply)}
                  </h2>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm capitalize text-gray-100">
                    circulating supply
                  </span>
                  <h2 className="text-base font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
                      minimumFractionDigits: 0,
                    }).format(data.market_data.circulating_supply)}
                  </h2>
                </div>
              </div>

              {/* Links and Sentiments space between (different a bit) */}
              <div className="flex w-full mt-4 justify-between">
                {/* links Start*/}
                <div className="flex flex-col">
                  <a
                    href={data?.links?.homepage[0]}
                    className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {data?.links?.homepage[0].substring(0, 30)}
                  </a>
                  <a
                    href={data?.links?.blockchain_site[0]}
                    className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {data?.links?.blockchain_site[0].substring(0, 30)}
                  </a>

                  {data?.links?.official_forum_url[0] && (
                    <a
                      href={data?.links?.official_forum_url[0]}
                      className="text-sm bg-gray-200 text-gray-100 px-1.5 py-0.5 my-1 rounded"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {data?.links?.official_forum_url[0].substring(0, 30)}
                    </a>
                  )}
                </div>
                {/* Links End */}

                {/* Sentiment start allCol (content) at start */}
                <div className="flex flex-col content-start">
                  <span className="text-sm capitalize text-gray-100">
                    sentiment
                  </span>
                  {/* up sentiment */}
                  <div className="flex justify-between">
                    <div
                      className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25 bg-green text-green `}
                    >
                      <span>
                        {Number(data.sentiment_votes_up_percentage).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  {/* down sentiment */}
                  <div className="flex justify-between">
                    <div
                      className={`text-sm px-1 ml-2 my-1 font-medium flex items-center
          rounded uppercase bg-opacity-25
           bg-red text-red`}
                    >
                      <span>
                        {Number(data.sentiment_votes_down_percentage).toFixed(
                          2
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
                {/* Sentiment End */}
              </div>
              {/*Left Part End  */}
            </div>
            {/* Wrpapper Left End */}

            {/* Right Start */}

            <div className="flex flex-col w-[55%] h-full pl-3 ">
              <Chart id={data.id} />
            </div>

            {/* Links ... */}
          </div>
        ) : (
          // loading indicator
          <div className="w-full min-h-[60vh] h-full flex justify-center items-center">
            <div
              className="w-8 h-8 border-4 border-cyan rounded-full
             border-b-gray-200 animate-spin "
              role="status"
            />
            <span className="ml-2">please wait...</span>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("model")
    // secondParam is Where we wanna render (freecodecamp blog refer)
  );
};

export default CryptoDetails;

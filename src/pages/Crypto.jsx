import React from "react";
import { Outlet } from "react-router-dom";
import CryptoDetails from "../components/CryptoDetails";
import Filters from "../components/Filters";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filters />
      <CryptoDetails />
      <Outlet />
    </section>
  );
};

export default Crypto;

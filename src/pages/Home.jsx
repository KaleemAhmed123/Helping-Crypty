import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <div>
          <main className="w-full h-full flex flex-col content-center items-center relative text-white font-nunito">
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
            <Logo />
            <Navigation />
            <Outlet />
          </main>
        </div>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;

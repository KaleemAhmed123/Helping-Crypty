import React from "react";
import { Outlet } from "react-router-dom";

const Trending = () => {
  return (
    <div>
      <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
        <Outlet />
      </section>
    </div>
  );
};

export default Trending;

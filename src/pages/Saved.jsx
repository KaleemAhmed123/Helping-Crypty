import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Saved = () => {
  return (
    <div>
      <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
        Saved
        <Outlet />
      </section>
    </div>
  );
};

export default Saved;

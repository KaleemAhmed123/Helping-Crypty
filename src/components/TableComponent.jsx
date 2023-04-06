import React from "react";

const TableComponent = () => {
  return (
    <>
      <div className="flex flex-col mt-9 border border-gray-100 rounded">
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;

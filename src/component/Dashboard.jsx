import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import Category from "./Category";

const Dashboard = () => {
  const { dashboardData} = useContext(DashboardContext);
  


  return (
    <>
     <div className="bg-gray-100 py-10">

  <div className="flex flex-col md:flex-row md:justify-between gap-4 px-4 md:px-8">
 
    <h1 className="font-bold text-lg">CNAPP Dashboard</h1>

   
    <div className="flex flex-wrap gap-2 md:gap-3">
      <button className="flex items-center gap-2 border-2 border-gray-300 bg-white p-2 rounded-md text-xs text-gray-500 font-semibold hover:text-blue-800 hover:border-blue-800">
        <span>Add Widgets</span>
        <i className="fa-solid fa-plus"></i>
      </button>
      <button className="border-2 border-gray-300 bg-white p-2 rounded-md text-gray-500 font-semibold hover:text-blue-800 hover:border-blue-800">
        <i className="fa-solid fa-rotate"></i>
      </button>
      <button className="border-2 border-gray-300 bg-white p-2 rounded-md text-gray-500 font-semibold hover:text-blue-800 hover:border-blue-800">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
      <button className="flex items-center gap-2 border-2 border-gray-300 bg-white p-2 rounded-md text-xs text-gray-500 font-semibold hover:text-blue-800 hover:border-blue-800">
        <i className="fa-solid fa-clock"></i>
        <span>Last 2 days</span>
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </div>
  </div>

 
  <div className="font-semibold px-4 md:px-10">
    {Object.keys(dashboardData).map((categoryName) => (
      <Category
        key={categoryName}
        name={categoryName}
        widgets={dashboardData[categoryName]}
      />
    ))}
  </div>
</div>

    </>
  );
};

export default Dashboard;

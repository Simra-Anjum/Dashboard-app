import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";

const Widget = ({ widget, category }) => {
  const { removeWidget } = useContext(DashboardContext);

  return (
    <div className="bg-white rounded-lg w-[32%] min-h-[220px] px-3 py-4 shadow-lg flex flex-col  transform transition duration-300 hover:scale-105">
    
      <div className="flex relative rounded-lg bg-gray-100 p-2">
        <h3 className="font-semibold text-sm">{widget.title}</h3>
        <button
          onClick={() => removeWidget(category, widget.id)}
          className="absolute right-2 top-2 text-gray-500 hover:text-blue-800"
        >
          ⛌
        </button>
      </div>

     
      <div className="flex items-center justify-center flex-grow p-2">
        <p className="text-gray-700 text-sm text-center">{widget.content}</p>
      </div>
    </div>
  );
};

export default Widget;

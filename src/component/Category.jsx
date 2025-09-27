import React, { useContext, useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import { DashboardContext } from "../context/DashboardContext";

const Category = ({ name, widgets }) => {
  const { searchTerm } = useContext(DashboardContext);
  const [showForm, setShowForm] = useState(false);

  const filteredWidgets = widgets.filter(widget =>
    widget.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-3">
      <h2 className="text-md font-bold py-2">{name}</h2>

      <div className="flex flex-wrap gap-4">
     
        {filteredWidgets.map(widget => (
          <Widget key={widget.id} widget={widget} category={name} />
        ))}


        <div className="bg-white rounded-lg w-full sm:w-[48%] lg:w-[32%] min-h-[220px] px-3 py-4 shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-105">
          {!showForm ? (
           <button
  onClick={() => setShowForm(true)}
  className="flex items-center gap-2 border-2 border-gray-300 bg-white p-2 rounded-md text-xs text-gray-500 font-semibold hover:text-blue-800 hover:border-blue-800"
>
  <span>Add Widgets</span>
  <i className="fa-solid fa-plus"></i>
</button>
          ) : (
            <AddWidgetForm
              category={name}   
              closeForm={() => setShowForm(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;

import React, { createContext, useState } from "react";
import jsonData from "../data/widgets.json";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");


  const addWidget = (category, widget) => {
    setDashboardData(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), { ...widget, id: Date.now() }]
    }));
  };


  const removeWidget = (category, id) => {
    setDashboardData(prev => ({
      ...prev,
      [category]: (prev[category] || []).filter(w => w.id !== id)
    }));
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardData,
        addWidget,
        removeWidget,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

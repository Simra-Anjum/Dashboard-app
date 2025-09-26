import React from "react";
import { DashboardProvider } from "./context/DashboardContext";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";

function App() {
  return (
    <DashboardProvider>
      <Navbar/>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;

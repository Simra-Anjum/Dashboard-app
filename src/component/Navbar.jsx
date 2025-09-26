
import React, { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";


const Navbar = () => {
   const {searchTerm, setSearchTerm } = useContext(DashboardContext);
  return (
    <nav className="bg-white flex flex-col md:flex-row p-2 ">
     
      <div className="flex gap-2 md:mx-11 w-full md:w-1/2 justify-center md:justify-start mb-3 md:mb-0">
        <h1 className="text-gray-300">Home</h1>
        <span className="text-gray-300">&gt;</span>
        <h1 className="font-bold text-blue-900">Dashboard V2</h1>
      </div>

     
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <input
          type="text"
          placeholder="Search widgets..."
          value={searchTerm}
  onChange={e => setSearchTerm(e.target.value)}
          className="bg-gray-100 w-full md:w-[400px] border-2 border-blue-100 px-3  rounded-lg hover:border-blue-800"
        />
      </div>
    </nav>
  )
}

export default Navbar

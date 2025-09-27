import React, { useContext, useState } from "react";
import { DashboardContext } from "../context/DashboardContext";

const AddWidgetForm = ({ closeForm }) => {
  const { addWidget, dashboardData } = useContext(DashboardContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && selectedCategory) {
      addWidget(selectedCategory, { title, content });
      closeForm();
    } else {
      alert("Please fill all fields and select a category");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full text-sm md:w-1/2 mx-auto"
    >
  
      <input
        type="text"
        placeholder="Widget Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1 rounded"
        required
      />

      
      <textarea
        placeholder="Widget Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-1 rounded resize-none"
        required
      />

      
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-1 rounded"
        required
      >
        <option value="">Select Category</option>
        {Object.keys(dashboardData).map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

    
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Add
        </button>
        <button
          type="button"
          onClick={closeForm}
          className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddWidgetForm;

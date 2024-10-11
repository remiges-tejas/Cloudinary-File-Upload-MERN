// src/App.jsx

import React, { useState } from 'react';
import EmployeeUpload from './components/EmployeeUpload';
import EmployeeList from './components/EmployeeList';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify

function App() {
  const [refreshKey, setRefreshKey] = useState(0); // State to trigger re-fetching of employees

  const handleUpload = (newEmployee) => {
    // Add new employee to the list without fetching again
    setRefreshKey((prev) => prev + 1); // Trigger re-rendering of EmployeeList
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <ToastContainer /> {/* Add ToastContainer */}
      <EmployeeUpload onUpload={handleUpload} />
      <h1 className="text-2xl font-bold mt-8">Employee List</h1>
      <EmployeeList key={refreshKey} /> {/* Use refreshKey to re-fetch */}
    </div>
  );
}

export default App;
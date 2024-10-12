// src/EmployeeList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    // hardcoding url [not a good practice]
    const apiUrl =
      "https://cloudinary-file-upload-mern.onrender.com/api/employees/";
    try {
      const response = await axios.get(apiUrl);
      setEmployees(response.data);
    } catch (err) {
      setError("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {employees.map((employee) => (
        <div
          key={employee._id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={employee.avatar_img}
            alt={`${employee.name}'s avatar`}
            className="w-full h-38 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{employee.name}</h2>
            <p className="text-gray-600">Username: {employee.username}</p>
            <p className="text-gray-600">Age: {employee.age}</p>
            <p className="text-gray-600">Designation: {employee.designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;

// src/EmployeeUpload.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast
import Spinner from './Spinner'; // Import Spinner component

const EmployeeUpload = ({ onUpload }) => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    age: '',
    designation: '',
    avatar_img: null,
  });
  const [loading, setLoading] = useState(false); // State for loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'avatar_img') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show spinner immediately
    setLoading(true);

    const data = new FormData();
    data.append('avatar_img', formData.avatar_img);
    data.append('username', formData.username);
    data.append('name', formData.name);
    data.append('age', formData.age);
    data.append('designation', formData.designation);

    try {
      const response = await axios.post('http://localhost:5000/api/employees/upload', data);
      toast.success("Employee added successfully!"); // Show success toast
      onUpload(response.data); // Call onUpload to update employee list
      setFormData({ username: '', name: '', age: '', designation: '', avatar_img: null });
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error("Upload failed!"); // Show error toast
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 relative">
      <h1 className="text-2xl font-bold text-center mb-4">Upload Employee</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" name="designation" placeholder="Designation" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
        <input type="file" name="avatar_img" onChange={handleChange} accept="image/*" required className="w-full p-2 border border-gray-300 rounded" />

        <button 
          type="submit"
          className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={loading}
        >
          Upload
        </button>
      </form>

      {/* Spinner Overlay */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default EmployeeUpload;
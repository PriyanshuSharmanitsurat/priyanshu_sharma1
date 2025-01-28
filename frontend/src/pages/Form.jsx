// src/pages/Form.jsx
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    dateOfBirth: '',
    country: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4000/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setFormData({ fullName: '', phoneNumber: '', dateOfBirth: '', country: '', gender: '' });
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url('https://i.pinimg.com/236x/b4/c6/3a/b4c63a093ed80b4177ae5dd7ba22351c.jpg')` }}>
      <nav className="w-full bg-[#393939] p-4 fixed top-0 left-0">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <img
        src="https://p1.hiclipart.com/preview/529/213/78/graduation-cap-square-academic-cap-graduation-ceremony-hat-school-diploma-academic-degree-education-png-clipart.jpg"
        alt="EduPath Logo"
        className="h-8"
      />
      <span className="text-white text-2xl ml-4">EduPath</span>
    </div>
    <div className="flex space-x-4">
      <button className="text-white px-4 py-2 rounded-lg bg-black-600 hover:bg-black transition-colors duration-300">
        Home
      </button>
      <button className="text-white px-4 py-2 rounded-lg bg-black-600 hover:bg-black transition-colors duration-300">
        Back
      </button>
    </div>
  </div>
</nav>

      <div className="flex items-center justify-center min-h-screen pt-16">
      
        <div className="flex bg-white bg-opacity-0 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl rounded-lg">
        
          <div className="w-1/2 p-8 bg-opacity-0 backdrop-filter backdrop-blur-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Qr7Zry2MPEqFAtCEr_ojH-IwUK-qoX6v5Q&s" alt="Study" className="h-64 w-full object-cover" />
            <p className="text-center mt-4 text-lg font-light">Personalizing your learning experience helps us tailor content and recommendations that best suit your interests and educational background. Join a community of learners and reach your full potential with EduHub</p>
          </div>
          <div className="w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="bg-[#393939] border border-gray-600 p-2 w-full text-white rounded-md" />
              </div>
              <div>
                <label className="block">Phone Number</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="bg-[#393939] border border-gray-600 p-2 w-full text-white rounded-md" />
              </div>
              <div>
                <label className="block">Date of Birth</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="bg-[#393939] border border-gray-600 p-2 w-full text-white rounded-md" />
              </div>
              <div>
                <label className="block">Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} className="bg-[#393939] border border-gray-600 p-2 w-full text-white rounded-md" />
              </div>
              <div>
                <label className="block">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="bg-[#393939] border border-gray-600 p-2 w-full text-white rounded-md">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-md">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

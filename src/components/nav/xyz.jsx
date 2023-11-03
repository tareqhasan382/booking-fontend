import React, { useState } from 'react';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    roomCount: 0,
    bathroomCount: 0,
    guestCount: 0,
    locationValue: '',
    price: 0,
    userId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Property Information</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-gray-700 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        {/* Repeat similar code for other input fields */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;

// className=" flex flex-col items-center gap-2 justify-center lg:w-[375px] sm:w-[350px] "
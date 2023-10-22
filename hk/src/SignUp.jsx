import React, { useState } from 'react';
import NaveBar from './Navebar';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    interest: '',
    goals: '',
    location: '',
  });

  const interests = ["Select an interest", "Coding", "Gaming", "Cooking"];
  const goals = ["Select your goals", "Learn", "Improve", "Explore"];
  const locations = ["Select your location", "City", "Suburb", "Rural"];

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const errors = {};

    // Add your validation logic here
    // Example: Check if the email is valid
    if (data.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = 'Invalid email address';
    }

    // Check if all required fields are filled
    if (!data.name || !data.email || !data.password || !data.interest || !data.goals || !data.location) {
      errors.allFields = 'All fields are required';
    }

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
  };

  return (
    <>
        {/* <NaveBar/> */}
    <div className="min-h-screen flex items-center justify-center bg-image">
      <div className="bg-black bg-opacity-50 rounded-lg shadow-md w-96 border border-gray-300">
        <h2 className="text-2xl font-semibold text-center text-yellow-500 p-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <label htmlFor="name" className="block text-sm font-medium text-yellow-500 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300"
              required
            />
          </div>
          <div className="p-4">
            <label htmlFor="email" className="block text-sm font-medium text-yellow-500 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
            )}
          </div>
          <div className="p-4">
            <label htmlFor="password" className="block text-sm font-medium text-yellow-500 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300"
              required
            />
          </div>
          <div className="p-4">
            <label htmlFor="interest" className="block text-sm font-medium text-yellow-500 mb-2">
              Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300"
              required
            >
              {interests.map((interest, index) => (
                <option key={index} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </div>
          <div className="p-4">
            <label htmlFor="goals" className="block text-sm font-medium text-yellow-500 mb-2">
              Goals
            </label>
            <select
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300"
              required
            >
              {goals.map((goal, index) => (
                <option key={index} value={goal}>
                  {goal}
                </option>
              ))}
            </select>
          </div>
          <div className="p-4">
            <label htmlFor="location" className="block text-sm font-medium text-yellow-500 mb-2">
              Location
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-gray-300"
              required
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          {formErrors.allFields && (
            <p className="text-red-500 text-sm mb-2">{formErrors.allFields}</p>
          )}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`bg-yellow-500 text-white py-2 px-4 rounded-md ${
                isFormValid ? 'hover:bg-yellow-600' : 'cursor-not-allowed bg-yellow-500'
              }`}
              disabled={!isFormValid}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUpForm;

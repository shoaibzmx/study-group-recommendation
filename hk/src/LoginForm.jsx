import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NaveBar from './Navebar';
import './LoginForm.css'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const errors = {};

    // Check if the email is valid
    if (data.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = 'Invalid email address';
    }

    // Check if both fields are filled
    if (!data.email || !data.password) {
      errors.allFields = 'Both fields are required';
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
    
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-md w-96">
      
        <h2 className="text-2xl font-semibold text-center text-yellow-500 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-yellow-500 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-yellow-300"
              required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-yellow-500 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 w-full rounded-md border border-yellow-500"
              required
            />
          </div>
          {formErrors.allFields && (
            <p className="text-red-500 text-sm mb-2">{formErrors.allFields}</p>
          )}
          <div className="flex items-center justify-center">
          <Link
          to="/browse">
            <button 
              type="submit"
              className={`bg-yellow-500 text-white py-2 px-4 rounded-md ${
                isFormValid ? 'hover:bg-yellow-600' : 'cursor-not-allowed bg-gray-300'
              }`}
              disabled={!isFormValid}
            >
              Log In
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginForm;

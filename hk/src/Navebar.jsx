import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const isSignUpPage = location.pathname === '/signup';
  const isLoginPage = location.pathname === '/login';
  const isBrowsePage = location.pathname === '/browse';

  return (
    <nav className="bg-yellow-500">
      <div className="container mx-auto flex justify-between items-center">
        {!isSignUpPage && !isBrowsePage && (
          <Link
            to="/signup"
            className="text-white text-lg font-semibold hover:underline focus:outline-none bg-yellow-600 hover:bg-yellow-600 px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </Link>
        )}

        {!isLoginPage && !isBrowsePage && (
          <Link
            to="/login"
            className="text-white text-lg font-semibold hover:underline focus:outline-none bg-yellow-600 hover:bg-yellow-600 px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>
        )}
        {isBrowsePage && (
            <div className="text-white flex-1 items-center text-center text-lg font-semibold bg-blue-500 px-6 py-3 "> 
            Browse
           </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

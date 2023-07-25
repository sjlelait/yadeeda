import React from 'react';
import { useLocation } from 'react-router-dom';

const AppWithBackground = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Modify the path if your home page has a different URL

  return (
    <div className={`App ${isHomePage ? 'noBackground' : ''}`}>
      {children}
    </div>
  );
};

export default AppWithBackground;
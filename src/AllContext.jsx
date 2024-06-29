import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the theme
const AllContext = createContext();

// Custom hook to use theme context
export const allContext = () => {
  const context = useContext(AllContext);
  if (!context) {
    throw new Error('allContext must be used within a ThemeProvider');
  }
  return context;
};

// ThemeProvider component to wrap your app
export const ThemeProvider = ({ children }) => {
//! Theme
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme; // Fix here: set newTheme instead of theme
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

//! Media Screan

  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width > 992) {
      return 'large';
    } else if (width > 768) {
      return 'medium';
    } else {
      return 'small';
    }
  };
  const [screenSize, setScreenSize] = useState(getScreenSize());
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

//! Delete Model 
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteType, setDeleteType] = useState('');

  const openDeleteModel = (type, id) => {
    setDeleteType(type);
    setItemToDelete(id);
    setShowDeleteModel(true);
  };

  const closeDeleteModel = () => {
    setShowDeleteModel(false);
  };

  return (
    <AllContext.Provider value={{ theme, toggleTheme, screenSize, showDeleteModel, deleteType, itemToDelete, openDeleteModel, closeDeleteModel }}>
      {children}
    </AllContext.Provider>
  );
};

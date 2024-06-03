import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [backgroundDark, setBackgroundDark] = useState(false); 
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
          setBackgroundDark(savedTheme === 'dark');
        }
      } catch (error) {
        console.log('Failed to load theme from storage:', error);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setBackgroundDark(newTheme === 'dark');
    try {
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      console.log('Failed to save theme to storage:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, backgroundDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

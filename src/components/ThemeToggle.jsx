
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice.js';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <button 
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      title={isDarkMode ? 'تفعيل الوضع النهاري' : 'تفعيل الوضع الليلي'}
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;

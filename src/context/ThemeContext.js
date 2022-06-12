import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const initialTheme = 'light';

/**
 * It takes in a child component, and returns a new component that wraps the child component in a
 * context provider
 * @returns The ThemeProvider is returning the ThemeContext.Provider with the value of data.
 */
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = e => {
    const value = e.target.value === 'light' ? 'light' : 'dark';
    setTheme(value);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export { ThemeProvider };
export default ThemeContext;

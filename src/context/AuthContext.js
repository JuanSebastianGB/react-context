import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();
const initialAuth = null;

/**
 * It takes in a child component, and returns a new component that wraps the child component in a
 * context provider
 * @returns The AuthProvider is returning the AuthContext.Provider with the value of data.
 */
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = () => {
    if (auth) setAuth(null);
    else setAuth(true);
  };
  const data = { auth, handleAuth };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider };
export default AuthContext;

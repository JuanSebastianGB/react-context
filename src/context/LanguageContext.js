import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const initialLanguage = 'en';
const translations = {
  es: {
    headerTitle: 'Mi aplicación CON Context API',
    headerSubtitle: 'Mi cabecera',
    headerLight: 'Claro',
    headerDark: 'Oscuro',
    buttonLogin: 'Iniciar Sesión',
    buttonLogout: 'Cerrar Sesión',
    mainWelcome: 'Bienvenid@ invitad@',
    mainHello: 'Hola Usuari@',
    mainContent: 'Mi contenido principal',
    footerTitle: 'Mi pié de página',
  },
  en: {
    headerTitle: 'My application with Context API',
    headerSubtitle: 'My header',
    headerLight: 'Light',
    headerDark: 'Dark',
    buttonLogin: 'Login',
    buttonLogout: 'Logout',
    mainWelcome: 'Welcome Guest',
    mainHello: 'Hello User',
    mainContent: 'My main content',
    footerTitle: 'My footer',
  },
};

/**
 * It sets the language to the value of the event target and sets the texts to the translations of the
 * language
 * @returns The LanguageProvider is being returned.
 */
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = e => {
    setLanguage(e.target.value);
    setTexts(translations[language]);
  };

  const data = { texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

export { LanguageProvider };
export default LanguageContext;

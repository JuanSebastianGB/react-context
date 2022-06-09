import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = 'light';
const initialLanguage = 'en';
const initialAuth = false;

const translations = {
  es: {
    headerTitle: 'Mi aplicacion SIN Context Api',
    headerSubtitle: 'Mi Cabecera',
    headerLight: 'Claro',
    headerDark: 'Oscuro',
    buttonLogin: 'Iniciar Sesion',
    buttonLogout: 'Cerrar Sesion',
    mainWelcome: 'Bienvenido',
    mainHello: 'Hola usuario',
    mainContent: 'Mi contenido principal',
    footerTitle: 'Mi pie de pagina',
  },
  en: {
    headerTitle: 'My application WITHOUT Context Api',
    headerSubtitle: 'My Header',
    headerLight: 'Sure',
    headerDark: 'Dark',
    buttonLogin: 'Login',
    buttonLogout: 'Close Session',
    mainWelcome: 'Welcome',
    mainHello: 'Hello user',
    mainContent: 'My main content',
    footerTitle: 'My footer',
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = e => {
    const result = e.target.value;
    result === 'dark' ? setTheme('dark') : setTheme('light');
  };
  const handleLanguage = e => {
    const result = e.target.value;
    setLanguage(result);
    setTexts(translations[result]);
  };
  const handleAuth = () => {
    setAuth(!auth);
  };
  return (
    <div className='my-page'>
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;

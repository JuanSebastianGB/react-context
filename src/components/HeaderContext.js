import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

const HeaderContext = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name='' id='' onChange={handleLanguage}>
        <option value='es'>ES</option>
        <option value='en'>EN</option>
      </select>
      <input
        type='radio'
        onClick={handleTheme}
        name='theme'
        id='light'
        value='light'
      />
      <label htmlFor='light'>{texts.light}</label>
      <input
        type='radio'
        onClick={handleTheme}
        name='theme'
        id='dark'
        value='dark'
      />
      <label htmlFor='dark'>{texts.dark}</label>
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;

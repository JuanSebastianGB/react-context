import PropTypes from 'prop-types';

const Header = ({
  theme,
  handleTheme,
  texts,
  handleLanguage,
  auth,
  handleAuth,
}) => {
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

Header.propTypes = {
  theme: PropTypes.string,
  handleTheme: PropTypes.func,
  texts: PropTypes.object,
  handleLanguage: PropTypes.func,
  auth: PropTypes.bool,
  handleAuth: PropTypes.func,
};
export default Header;

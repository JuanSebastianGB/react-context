import PropTypes from 'prop-types';

const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>Default application without Context</h2>
      <h3>Header</h3>
      <select name='' id=''>
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
      <label htmlFor='light'>Light</label>
      <input
        type='radio'
        onClick={handleTheme}
        name='theme'
        id='dark'
        value='dark'
      />
      <label htmlFor='dark'>dark</label>
      <button> Login</button>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  handleTheme: PropTypes.func,
};
export default Header;

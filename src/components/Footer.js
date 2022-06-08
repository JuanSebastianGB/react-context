import PropTypes from 'prop-types';
const Footer = ({ theme }) => {
  return (
    <footer className={theme}>
      <h4>Footer content</h4>
    </footer>
  );
};

Footer.propTypes = {
  theme: PropTypes.string,
};
export default Footer;

import PropTypes from 'prop-types';
const Footer = ({ theme, texts }) => {
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
};

Footer.propTypes = {
  theme: PropTypes.string,
  texts: PropTypes.object,
};
export default Footer;

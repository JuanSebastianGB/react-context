import PropTypes from 'prop-types';

const Main = ({ theme, texts }) => {
  return (
    <main className={theme}>
      <p> {texts.mainWelcome} </p>
      <p>{texts.mainHello}</p>
      <p>{texts.mainContent}</p>
    </main>
  );
};

Main.propTypes = {
  theme: PropTypes.string,
  texts: PropTypes.object,
};
export default Main;

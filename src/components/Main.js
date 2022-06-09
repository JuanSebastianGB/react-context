import PropTypes from 'prop-types';

const Main = ({ theme, texts, auth }) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p> {texts.mainWelcome} </p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

Main.propTypes = {
  theme: PropTypes.string,
  texts: PropTypes.object,
  auth: PropTypes.bool,
};
export default Main;

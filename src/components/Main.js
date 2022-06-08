import PropTypes from 'prop-types';

const Main = ({ theme }) => {
  return (
    <main className={theme}>
      <p> Welcome@ </p>
    </main>
  );
};

Main.propTypes = {
  theme: PropTypes.string,
};
export default Main;

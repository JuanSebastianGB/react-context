import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const initialTheme = 'light';
const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = e => {
    const result = e.target.value;
    result === 'dark' ? setTheme('dark') : setTheme('light');
  };
  return (
    <div className='my-page'>
      <h2>Default page without Context</h2>
      <Header theme={theme} handleTheme={handleTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default MyPage;

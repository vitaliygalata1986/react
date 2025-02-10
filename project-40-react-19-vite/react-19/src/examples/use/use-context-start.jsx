import { createContext, use } from 'react';
const ThemeContext = createContext(null);

const Header = () => {
  // const theme = useContext(ThemeContext);
  const theme = use(ThemeContext); // вместо useContext используем use

  return (
    <header className={`header ${theme}`}>
      <h1 className='fs-1'>Header</h1>
    </header>
  );
};

const App = () => {
  return (
    <>
      <h2 className='fs-3 mb-5'>
        use() <small className='fw-lighter'>вместо useContext</small>
      </h2>
      {/* <ThemeContext.Provider value='light'>
        <Header />
      </ThemeContext.Provider> */}
      {/* Provider можно не писать, так как ThemeContext уже является провайдером */}
      <ThemeContext value='light'>
        <Header />
      </ThemeContext>
    </>
  );
};

export default App;

// 01-00

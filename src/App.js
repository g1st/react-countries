import React, { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [lightMode, setLightMode] = useState(true);

  const handleModeChange = () => {
    lightMode ? setLightMode(false) : setLightMode(true);
  };

  return (
    <div className={lightMode ? 'light' : 'dark'}>
      <Header mode={lightMode} handleChange={handleModeChange} />
      <main>app</main>
    </div>
  );
};

export default App;

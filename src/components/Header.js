import React from 'react';

const Header = ({ mode, handleChange }) => {
  return (
    <header className="header">
      <h1 className="title">Where in the world?</h1>
      <div className="mode-switch" onClick={handleChange}>
        {mode ? (
          <i className="far fa-moon fa-1x theme-icon"></i>
        ) : (
          <i className="far fa-sun fa-1x theme-icon"></i>
        )}
        {mode ? <span>Dark Mode</span> : <span>Light Mode</span>}
      </div>
    </header>
  );
};

export default Header;

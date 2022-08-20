import React from 'react';

function Header({ setPlace }) {
  return (
    <div className="input--container">
      <input
        type="text"
        placeholder="Search for a state e.g Lagos"
        onChange={(e) => setPlace(e.target.value)}
      />
    </div>
  );
}

export default Header;

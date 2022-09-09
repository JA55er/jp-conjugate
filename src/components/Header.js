import React from 'react';

const Header = ({ name }) => {
  return (
    <div className='headerContainer'>
      <div className='header'>{name}</div>
    </div>
  );
};

export default Header;

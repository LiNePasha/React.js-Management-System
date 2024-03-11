import React from 'react';
import './header.css';

function Header() {

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>

      <div className='d-flex w-100 align-items-center justify-content-between'>
          <a href="/" className='logo d-flex align-items-center'>
              <h2>TMS</h2>
          </a>
      </div>

    </header>
  )
}

export default Header;
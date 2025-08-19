import React from 'react'
import Logo from '../../assets/images/logo.png'
import './header.css'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
              <img src={Logo} alt="Logo" height="70px" />              
       </div>
    </header>
  )
}

export default Header

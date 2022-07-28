import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import linkBtns from './data.js'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSubmenu, openSidebar, closeSubmenu } = useGlobalContext()
  return (
    <nav
      className='nav'
      onMouseOver={(e) => {
        if (!e.target.classList.contains('link-btn')) closeSubmenu()
      }}
    >
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {linkBtns.map((btn, idx) => {
            return (
              <li key={idx}>
                <button
                  className='link-btn'
                  onMouseOver={(e) => {
                    const tempBtn = e.target.getBoundingClientRect()
                    const center = (tempBtn.right + tempBtn.left) / 2
                    const bottom = tempBtn.bottom - 3
                    const location = { center, bottom }
                    const text = btn.page
                    openSubmenu(text, location)
                  }}
                >
                  {btn.page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar

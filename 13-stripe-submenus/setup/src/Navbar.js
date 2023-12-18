import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'
const Navbar = () => {
  const {openSidebar, openSubMenu, closeSubMenu} = useGlobalContext()
  const displaySubMenu =(e)=> {
    const page = e.target.textContent
    const temp = e.target.getBoundingClientRect()
    const center = (temp.left + temp.right)/2
    const bottom = temp.bottom -3
    console.log({page, temp})
    openSubMenu(page, {center, bottom})
  }
  const handleSubmenu =(e)=> {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu()
    }
  }
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='nav-logo' alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubMenu}>
              products
            </button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubMenu}>
              developers
            </button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
    )
}

export default Navbar

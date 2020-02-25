import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Logo from './Logo'
import DrawerToggle from './drawer/DrawerToggle'

const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col f-row j-content-between">
          <Logo />
          <DrawerToggle />
          <nav className="main-nav sm-d-none">
            <ul className="nav-list">
              <li className="nav-item">
                <a onClick={() => scrollTo('#about')}>About</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollTo('#about')}>Experience</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollTo('#about')}>Work</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollTo('#about')}>Clients</a>
              </li>
              <li className="nav-item">
                <a onClick={() => scrollTo('#about')}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header

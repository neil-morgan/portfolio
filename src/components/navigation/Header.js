import { Link } from 'gatsby'
import React from 'react'
import Logo from './Logo'
import DrawerToggle from './drawer/DrawerToggle'

const Header = ({ siteTitle }) => (
  <header>
    <Logo />
    <DrawerToggle />
  </header>
)

export default Header

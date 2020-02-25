import { Link } from 'gatsby'
import React from 'react'
import logo from '../../images/logo.svg'

const Logo = () => (
  <Link to="/" className="logo">
    <img src={logo} alt="Neil Morgan logo" />
  </Link>
)

export default Logo

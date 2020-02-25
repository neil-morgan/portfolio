import React from 'react'
import PropTypes from 'prop-types'
import NavSystem from './navigation/NavSystem'
import Footer from './Footer'
const Layout = ({ children }) => (
  <NavSystem>
    <main>{children}</main>
    <Footer />
  </NavSystem>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

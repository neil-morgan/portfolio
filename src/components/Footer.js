import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    <a onClick={() => scrollTo('#top')}>Back to top</a>
  </footer>
)

export default Footer

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Drawer from './drawer/Drawer'

const NavSystem = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Drawer>{children}</Drawer>
      </>
    )}
  />
)

export default NavSystem

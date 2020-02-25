import React from 'react'
import { connect } from 'react-redux'
import { toggleDrawer } from '../../../state/app'

const DrawerToggle = ({ drawerIsOpen, dispatch, children }) => (
  <div
    className="drawer-toggle sm-d-flex"
    onClick={() => dispatch(toggleDrawer(!drawerIsOpen))}
  >
    <a className={'drawer-icon ' + (drawerIsOpen ? 'open' : 'closed')}>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
)

export default connect(
  state => ({
    drawerIsOpen: state.app.drawerIsOpen,
  }),
  null,
)(DrawerToggle)

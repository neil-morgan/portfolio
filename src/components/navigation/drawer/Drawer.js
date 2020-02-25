import React from 'react'
import { connect } from 'react-redux'
import { toggleDrawer } from '../../../state/app'

const Drawer = ({ drawerIsOpen, dispatch, children }) => (
  <>
    <div className={'drawer-body' + (drawerIsOpen ? ' open' : ' closed')}>
      {children}
    </div>
    <aside className={'drawer-aside' + (drawerIsOpen ? ' open' : ' closed')}>
      <nav>
        <ul>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
          <li>Item 1</li>
        </ul>
      </nav>
    </aside>
  </>
)

export default connect(
  state => ({
    drawerIsOpen: state.app.drawerIsOpen,
  }),
  null,
)(Drawer)

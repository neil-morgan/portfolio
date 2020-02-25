const initialState = {
  drawerIsOpen: false
};

const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const toggleDrawer = drawerIsOpen => ({
  type: TOGGLE_DRAWER,
  drawerIsOpen
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, drawerIsOpen: action.drawerIsOpen };
    default:
      return state;
  }
};

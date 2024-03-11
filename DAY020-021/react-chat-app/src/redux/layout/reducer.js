import { SET_ACTIVE_TAP } from "../../constants/actionTypes";

const INIT_STATE = {
  activeTab: "chat",
  userSidebar: false,
  conversationName: "Doris Brown",
  layoutMode: "light",
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAP:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};
export default Layout;

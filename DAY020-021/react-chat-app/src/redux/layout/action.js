import { SET_ACTIVE_TAP } from "../../constants/actionTypes";

export const setActiveTab = (tabId) => ({
  type: SET_ACTIVE_TAP,
  payload: tabId,
});

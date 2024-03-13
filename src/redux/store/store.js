import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import apiReducer from "../slices/apiSlice";
import apiSlice from "../features/api/apiSlice";
import userSlice from "../features/api/userSlice";
import { actionsTypes } from "../../helpers/constants";
const store = configureStore({
  reducer: {
    login: loginReducer,
    api: apiReducer,
    checker: apiSlice,
    user: userSlice,
    isOpenHistoryPanel: (state = false, action) => {
      if (action.type === actionsTypes.TOGGLE_HISTORY_PANEL) {
        return !state;
      }
      if (action.type === actionsTypes.TOGGLE_HISTORY_PANEL_FALSE) {
        return false;
      }
      return state;
    },
  },
});

export default store;

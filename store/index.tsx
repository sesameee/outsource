import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducer as announcementReducer } from "../states/announcement/reducer";
// import { reducer as somethingReducer } from "./states/something/reducer";

export const initStore = (initialState:any) => {
  return createStore(
    combineReducers({
      announcement: announcementReducer,
      // something: somethingReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

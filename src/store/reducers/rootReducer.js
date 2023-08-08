import authReducer from "./authReducer";
import contactUsReducer from "./contactUsReducer";
import localeReducer from "./localeReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const appReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  contactUs: contactUsReducer,
  locale: localeReducer,
  cart: cartReducer,
  order: orderReducer
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    state = undefined;
  }

  if (action.type === "ORDER_SUCCESS") {
    state.cart = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;

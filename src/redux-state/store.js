import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./userSlice";
import { cartReducer } from "./shoppingCartSlice";

const store = configureStore({
  reducer: {
    user: reducer,
    shoppingCart: cartReducer,
  },
});

export default store;

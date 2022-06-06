import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./slices/user.slice";

export default configureStore({
  reducer: {
    pokemon,
  },
});

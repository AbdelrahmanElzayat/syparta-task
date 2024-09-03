import { configureStore } from "@reduxjs/toolkit";
import { profileApi } from "./profile-reducer/profile"; // هنعملها بعد شوية
import profileReducer from "./profile-reducer/profileSlice";
import authReducer from "./auth-reducer/authSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,

    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
});

export default store;

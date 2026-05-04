import { createSlice } from "@reduxjs/toolkit";
import {
  persistUserDetails,
  removeAuthSession,
  getStoredUserDetails,
} from "@/utils/authStorage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    isAuthCheck: false,
  },

  reducers: {
    loginUser(state, action) {
      const { user, token, accessToken } = action.payload;
      const resolvedUser = user ?? null;
      const resolvedToken =
        token ??
        accessToken ??
        resolvedUser?.token ??
        null;
      state.user = resolvedUser;
      state.token = resolvedToken;
      state.error = null;
      state.loading = false;

      if (resolvedUser) {
        persistUserDetails(resolvedUser);
      }
    },

    loadUserFromStorage(state) {
      const user = getStoredUserDetails();
      if (user) {
        state.user = user;
        state.token = null;
      }
    },

    logout(state) {
      state.user = null;
      state.token = null;
      removeAuthSession();
    },

    authProfileRequestStarted(state) {
      state.loading = true;
    },

    authProfileRequestSucceeded(state, action) {
      const payload = action.payload;
      state.loading = false;
      state.user = payload;
      state.token =
        payload?.token ??
        payload?.accessToken ??
        payload?.user?.token ??
        state.token;
      state.isAuthCheck = true;
      if (state.user) {
        persistUserDetails(state.user);
      }
    },

    authProfileRequestFailed(state) {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.isAuthCheck = true;
      removeAuthSession();
    },
  },
});

export const {
  loginUser,
  loadUserFromStorage,
  logout,
  authProfileRequestStarted,
  authProfileRequestSucceeded,
  authProfileRequestFailed,
} = authSlice.actions;

export default authSlice.reducer;

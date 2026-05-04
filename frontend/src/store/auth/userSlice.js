import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUsersLoading(state, action) {
      state.loading = Boolean(action.payload);
    },
    setUsers(state, action) {
      state.users = action.payload ?? [];
      state.loading = false;
      state.error = null;
    },
    setUsersError(state, action) {
      state.error = action.payload ?? null;
      state.loading = false;
    },
    replaceUser(state, action) {
      const updated = action.payload;
      if (!updated?._id) return;
      state.error = null;
      const index = state.users.findIndex((u) => u._id === updated._id);
      if (index !== -1) {
        state.users[index] = updated;
      }
    },
    removeUser(state, action) {
      const id = action.payload;
      state.error = null;
      state.users = state.users.filter((u) => u._id !== id);
    },
  },
});

export const {
  setUsersLoading,
  setUsers,
  setUsersError,
  replaceUser,
  removeUser,
} = userSlice.actions;

export default userSlice.reducer;

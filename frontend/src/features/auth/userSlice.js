import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/api/client";

// GET ALL USERS
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/admin/users");
      

      return res.data.users;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

// TOGGLE ROLE
export const toggleUserRole = createAsyncThunk(
  "users/toggleRole",
  async (id, { rejectWithValue }) => {
    try {
      const res = await API.put(`/admin/user-role/${id}`);
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

// BLOCK / UNBLOCK
export const toggleBlockUser = createAsyncThunk(
  "users/toggleBlock",
  async (id, { rejectWithValue }) => {
    try {
      const res = await API.put(`/admin/block-user/${id}`);
      return res.data.user;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

// DELETE USER
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`/admin/user/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      // FETCH USERS
      .addCase(fetchUsers.pending, (state) => {

        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      })

      // TOGGLE ROLE
      .addCase(toggleUserRole.fulfilled, (state, action) => {
        const index = state.users.findIndex(u => u._id === action.payload._id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      // BLOCK USER
      .addCase(toggleBlockUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(u => u._id === action.payload._id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      // DELETE USER
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(u => u._id !== action.payload);
      });
  },
});

export default userSlice.reducer;
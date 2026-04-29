import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/client";

// REGISTER
export const registerUser = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
        try {
            const res = await API.post("/auth/register", data);
            return res.data; // full response
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Registration failed"
            );
        }
    }
);

// LOGIN
export const loginUser = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const res = await API.post("/auth/login", data);
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

// GET PROFILE
export const getProfile = createAsyncThunk(
    "auth/profile",
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.get("/auth/profile");
            return res.data;
        } catch (error) {
            return rejectWithValue("Session expired");
        }
    }
);

// LOGOUT
export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await API.post("/auth/logout");
            return true;
        } catch (error) {
            return rejectWithValue("Logout failed");
        }
    }
);

// SLICE
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
        isAuthCheck: false,
    },

    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // REGISTER
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                // state.user = action.payload.user //  auto login
                
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user; 
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // GET PROFILE
            .addCase(getProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthCheck = true
            })
            .addCase(getProfile.rejected, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthCheck = true
            })

            // LOGOUT
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./auth/authSlice";
import productReducers from "./products/productSlice";
import cartReducers from "./cart/cartSlice"
import userReducers from "./auth/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducers,
        users:userReducers,
        product: productReducers,
        cart: cartReducers,
    },
});







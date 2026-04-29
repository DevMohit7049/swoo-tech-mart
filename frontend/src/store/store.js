import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../features/auth/authSlice";
import productReducers from "../features/products/productSlice";
import cartReducers from "../features/cart/cartSlice"
import userReducers from "../features/auth/userSlice";

export const store = configureStore({
    reducer: {
        auth: authReducers,
        users:userReducers,
        product: productReducers,
        cart: cartReducers,
    },
});







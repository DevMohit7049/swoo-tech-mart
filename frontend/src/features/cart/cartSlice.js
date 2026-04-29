import { createSlice } from "@reduxjs/toolkit";

// Convert price string → number
export const getNumericPrice = (price) => {
  return Number(price.replace(/[^0-9.]/g, ""));
};

// Load cart safely
const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    
    if (!data) {
      return {
        cartItems: [],
        totalQty: 0,
        totalPrice: 0,
      };
    }

    return JSON.parse(data);
  } catch (err) {
    return {
      cartItems: [],
      totalQty: 0,
      totalPrice: 0,
    };
  }
};

// Save cart safely
const saveCartToStorage = (state) => {
  localStorage.setItem(
    "cart",
    JSON.stringify({
      cartItems: state.cartItems,
      totalQty: state.totalQty,
      totalPrice: state.totalPrice,
    })
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),

  reducers: {
    // ADD TO CART (STRICT NUMERIC ID)
    addToCart: (state, action) => {
      const item = action.payload;

      // enforce numeric ID
      if (typeof item.id !== "number") {
        console.error("Product must have numeric id");
        return;
      }

      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: item.quantity || 1,
        });
      }

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToStorage(state);
    },

    // INCREASE
    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToStorage(state);
    },

    // DECREASE
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToStorage(state);
    },

    // REMOVE
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      cartSlice.caseReducers.calculateTotals(state);
      saveCartToStorage(state);
    },

    // CLEAR
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQty = 0;

      saveCartToStorage(state);
    },

    // TOTALS
    calculateTotals: (state) => {
      let total = 0;
      let qty = 0;

      for (let item of state.cartItems) {
        const price = getNumericPrice(item.price);
        total += price * item.quantity;
        qty += item.quantity;
      }

      state.totalPrice = total;
      state.totalQty = qty;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
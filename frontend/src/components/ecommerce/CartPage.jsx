import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, getNumericPrice, increaseQty, removeFromCart } from "@/store/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import ROUTE_PATHS from "@/constants/Routes";

const CartPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const shipping = cartItems.length === 0 ? 0 : 80 + cartItems.length * 20;

  
  const tax = totalPrice * 0.18;
  const orderTotal = totalPrice + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT SID */}
      <div className="lg:col-span-2 space-y-4">
        {cartItems.length === 0 && (
          <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-600">
            Your cart is empty.
          </div>
        )}

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 bg-gray-100 rounded-xl p-4"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <span className="absolute top-0 left-0 bg-brand-primary text-white text-xs px-2 py-1 rounded">
                {item.tag}
              </span>
            </div>

            {/* DETAILS */}
            <div className="flex-1">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-red-500 font-semibold mt-1">
                ₹{getNumericPrice(item.price).toFixed(2)}
              </p>

              {/* QTY */}
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  className="px-2 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQty(item.id))}
                  className="px-2 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-2 text-xs text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>

              {/* EXTRA */}
              <p className="text-xs text-brand-primary mt-2">
                Standard Shipping Eligible
              </p>
              <p className="text-xs text-gray-500">{item.stock}</p>
            </div>

            <div className="text-right text-sm font-semibold">
              ₹{(getNumericPrice(item.price) * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE (SUMMARY) */}
      <div className="bg-gray-100 rounded-xl p-5 h-fit border border-brand-primary/40">
        <h2 className="font-semibold mb-4">Order Summary</h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Sub Total:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping estimate:</span>
            <span>₹{shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax estimate:</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold">
            <span>ORDER TOTAL:</span>
            <span>₹{orderTotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          disabled={cartItems.length === 0}
          onClick={() => navigate(ROUTE_PATHS.CHECKOUT)}
          className="w-full mt-5 bg-brand-primary text-white py-2 rounded-lg hover:bg-brand-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
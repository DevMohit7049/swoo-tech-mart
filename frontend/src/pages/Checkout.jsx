import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getNumericPrice } from "@/features/cart/cartSlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const [orderSuccess, setOrderSuccess] = useState("");

  const checkoutSchema = yup.object({
    firstName: yup.string().trim().required("First name is required"),
    lastName: yup.string().trim().required("Last name is required"),
    companyName: yup.string().nullable(),
    country: yup.string().required("Country is required"),
    addressLine1: yup.string().trim().required("Street address is required"),
    addressLine2: yup.string().nullable(),
    city: yup.string().trim().required("Town / City is required"),
    state: yup.string().required("State / County is required"),
    zipCode: yup
      .string()
      .trim()
      .matches(/^\d{4,10}$/, "Zip code should be 4 to 10 digits")
      .required("Zip code is required"),
    phoneNumber: yup
      .string()
      .trim()
      .matches(/^[0-9]{10,15}$/, "Phone number should be 10 to 15 digits")
      .required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    createAccount: yup.boolean(),
    orderNotes: yup.string().nullable(),
    paymentMethod: yup
      .string()
      .oneOf(["bank", "cod", "paypal"], "Please select a payment method")
      .required("Payment method is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "United States (US)",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "Washington",
      zipCode: "",
      phoneNumber: "",
      email: "",
      createAccount: false,
      orderNotes: "",
      paymentMethod: "bank",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const onSubmit = async () => {
    setOrderSuccess("Order details validated successfully.");
  };

  const shipping = useMemo(() => {
    if (cartItems.length === 0) return 0;
    return 80 + cartItems.length * 20;
  }, [cartItems.length]);

  const orderTotal = totalPrice + shipping;



  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold uppercase tracking-wide mb-5">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-100 rounded-md px-4 py-3 text-sm">
              Returning customer?{" "}
              <span className="text-red-500 underline cursor-pointer">Click here to log in</span>
            </div>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-sm">
              Have a coupon?{" "}
              <span className="text-red-500 underline cursor-pointer">Click here to enter your code</span>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4">Billing Detail</h2>

          <form id="checkout-form" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm block mb-2">First Name *</label>
                <input {...register("firstName")} className="w-full h-11 border border-gray-300 rounded px-3" />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="text-sm block mb-2">Last Name *</label>
                <input {...register("lastName")} className="w-full h-11 border border-gray-300 rounded px-3" />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm block mb-2">Company Name (Optional)</label>
              <input {...register("companyName")} className="w-full h-11 border border-gray-300 rounded px-3" />
            </div>

            <div>
              <label className="text-sm block mb-2">Country / Region *</label>
              <select {...register("country")} className="w-full h-11 border border-gray-300 rounded px-3 bg-white">
                <option>United States (US)</option>
                <option>India</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
            </div>

            <div>
              <label className="text-sm block mb-2">Street Address</label>
              <input
                {...register("addressLine1")}
                className="w-full h-11 border border-gray-300 rounded px-3 mb-3"
                placeholder="House number and street name ..."
              />
              {errors.addressLine1 && <p className="text-red-500 text-xs -mt-1 mb-2">{errors.addressLine1.message}</p>}
              <input
                {...register("addressLine2")}
                className="w-full h-11 border border-gray-300 rounded px-3"
                placeholder="Apartment, suite, unit, etc (Optional)"
              />
            </div>

            <div>
              <label className="text-sm block mb-2">Town / City *</label>
              <input {...register("city")} className="w-full h-11 border border-gray-300 rounded px-3" />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>

            <div>
              <label className="text-sm block mb-2">State / County *</label>
              <select {...register("state")} className="w-full h-11 border border-gray-300 rounded px-3 bg-white">
                <option>Washington</option>
                <option>California</option>
              </select>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
            </div>

            <div>
              <label className="text-sm block mb-2">Zip Code *</label>
              <input {...register("zipCode")} className="w-full h-11 border border-gray-300 rounded px-3" />
              {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
            </div>

            <div>
              <label className="text-sm block mb-2">Phone Number *</label>
              <input {...register("phoneNumber")} className="w-full h-11 border border-gray-300 rounded px-3" />
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
            </div>

            <div>
              <label className="text-sm block mb-2">Email Address *</label>
              <input {...register("email")} className="w-full h-11 border border-gray-300 rounded px-3" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <label className="text-sm flex items-center gap-2">
              <input type="checkbox" {...register("createAccount")} className="accent-brand-primary" />
              Create an account?
            </label>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
              <label className="text-sm block mb-2">Order Notes (Optional)</label>
              <textarea
                {...register("orderNotes")}
                className="w-full h-28 border border-gray-300 rounded px-3 py-2"
                placeholder="Note about your order, e.g. special note for delivery"
              />
            </div>
          </form>
        </div>

        <aside className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Order</h2>

          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex justify-between text-xs uppercase text-gray-500 pb-3 border-b border-gray-300">
              <span>Product</span>
              <span>Sub Total</span>
            </div>

            <div className="space-y-3 py-4 border-b border-gray-300">
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500">No items in cart.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between gap-3">
                    <div className="flex gap-3">
                      <img src={item.img} alt={item.title} className="w-12 h-12 object-contain border border-gray-200 bg-white" />
                      <div>
                        <p className="text-sm leading-tight line-clamp-2">{item.title}</p>
                        <p className="text-xs text-gray-500">x {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium whitespace-nowrap">
                      ₹{(getNumericPrice(item.price) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-between text-sm py-3 border-b border-gray-300">
              <span>Worldwide Standard Shipping</span>
              <span className="text-red-500">+ ₹{shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between pt-3 font-semibold">
              <span>Order Total</span>
              <span className="text-brand-primary">₹{orderTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 space-y-4">
            <label className="flex items-start gap-2 text-sm">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === "bank"}
                {...register("paymentMethod")}
                className="mt-1 accent-brand-primary"
              />
              <span>
                <span className="font-semibold block">Direct Bank Transfer</span>
                <span className="text-gray-500 text-xs">
                  Make your payment directly into our bank account. Please use your Order ID as the payment
                  reference.
                </span>
              </span>
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                {...register("paymentMethod")}
                className="accent-brand-primary"
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                {...register("paymentMethod")}
                className="accent-brand-primary"
              />
              Paypal
            </label>
            {errors.paymentMethod && <p className="text-red-500 text-xs">{errors.paymentMethod.message}</p>}
            {orderSuccess && <p className="text-green-600 text-xs">{orderSuccess}</p>}

            <button
              form="checkout-form"
              type="submit"
              disabled={cartItems.length === 0}
              className="w-full h-11 bg-brand-primary text-white rounded-md text-sm font-semibold uppercase tracking-wide hover:bg-brand-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Placing..." : "Place Order"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;

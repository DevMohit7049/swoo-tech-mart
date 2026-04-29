import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSection from "./UserSection";
import ProuductSection from "./productSection";
import { getProduct } from "@/features/products/productSlice";
import OrderSection from "./OrderSection";
import PaymentSection from "./PaymentSection";
import ShippingSection from "./ShippingSection";
import AnalyticsSection from "./AnalyticsSection";
import CouponSection from "./CouponSection";
import ReviewSection from "./ReviewSection";
import { fetchUsers } from "@/features/auth/userSlice";


const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const { loading, error, products } = useSelector((state) => state.product);
    const { user } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.users);

    const onlyUsers = users.filter(u => u.role === "user");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
        dispatch(fetchUsers());
    }, [dispatch]);




    const tabs = [
        { id: "dashboard", label: "Dashboard", desc: "Insights & overview" },
        { id: "products", label: "Products", desc: "Catalog management" },
        { id: "users", label: "Users", desc: "User administration" },
        { id: "orders", label: "Orders", desc: "Order workflow" },
        { id: "payments", label: "Payments", desc: "Payment tracking" },
        { id: "shipping", label: "Shipping", desc: "Delivery tracking" },
        { id: "analytics", label: "Analytics", desc: "Business metrics" },
        { id: "coupons", label: "Coupons", desc: "Offers & discounts" },
        { id: "reviews", label: "Reviews", desc: "Moderate feedback" },
    ];

    const stats = [
        { label: "Total Users", value: users.length , subtitle: "Registered accounts" },
        { label: "Total Products", value:onlyUsers.length || 0, subtitle: "Published items" },
        { label: "Orders", value: 0, subtitle: "Placed orders" }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 flex">
            {/* Sidebar */}
            <div className="w-72 bg-white/90 border-r border-slate-200 hidden md:flex flex-col p-5">

                <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Admin Panel</h2>
                <p className="text-sm text-slate-500 mb-7">Manage products, users and insights</p>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`p-3.5 text-left rounded-xl mb-2 transition ${activeTab === tab.id
                            ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                            }`}
                    >
                        <p className="font-semibold">{tab.label}</p>
                        <p className={`text-xs mt-0.5 ${activeTab === tab.id ? "text-white/90" : "text-slate-500"}`}>{tab.desc}</p>
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8">
                <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-sm">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-slate-900">Welcome, {user?.name || "Admin"}</h1>
                        <p className="text-sm text-slate-500">Everything you need to manage your store.</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-brand-primary/10 text-brand-primary font-semibold w-fit">
                        Role: {user?.role || "admin"}
                    </span>
                </div>

                {/* Mobile Tabs */}
                <div className="md:hidden grid grid-cols-3 gap-2 mb-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`p-2 rounded-xl text-[11px] font-semibold leading-tight min-h-[48px] ${activeTab === tab.id ? "bg-brand-primary text-white" : "bg-white border border-slate-200 text-slate-700"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Dashboard */}
                {activeTab === "dashboard" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {stats.map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                                <p className="text-3xl font-extrabold text-slate-900 mt-2">{item.value}</p>
                                <p className="text-xs text-slate-400 mt-2">{item.subtitle}</p>
                            </div>
                        ))}
                        <div className="md:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900">Quick Overview</h3>
                            <p className="text-sm text-slate-500 mt-1">
                                Use Products tab to add and update catalog items, and Users tab to monitor customer accounts.
                            </p>
                        </div>
                    </div>
                )}

                {/* Products */}
                {activeTab === "products" && (
                    <ProuductSection />
                )}

                {/* Users */}
                {activeTab === "users" && (
                    <UserSection />
                )}

                {activeTab === "orders" && <OrderSection />}
                {activeTab === "payments" && <PaymentSection />}
                {activeTab === "shipping" && <ShippingSection />}
                {activeTab === "analytics" && <AnalyticsSection />}
                {activeTab === "coupons" && <CouponSection />}
                {activeTab === "reviews" && <ReviewSection />}

                {/* Loader */}
                {loading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
                        <div className="bg-white p-4 rounded">Loading...</div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default AdminDashboard;
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/swootech.png';
import SubNavbar from './SubNavbar';
import { FaShoppingCart, FaBars, FaTimes, FaHome, FaBoxOpen, FaEnvelope, FaRegHeart, FaChevronDown } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../features/auth/authSlice';
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const { totalQty } = useSelector((state) => state.cart);
    const location = useLocation();
    const navControls = useAnimation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logoutUser());
        setMenuOpen(false);
        navigate('/');
    };

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        // Keep navbar always visible and run only a slight slide on navigation.
        closeMenu();
        navControls.set({ y: -6, opacity: 1 });
        navControls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.22, ease: "easeOut" }
        });
    }, [location.pathname, navControls]);

    const navLinks = [
        { to: "/", label: "Home", icon: <FaHome /> },
        { to: "/shop", label: "Products", icon: <FaBoxOpen /> },
        { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
    ];

    return (
        <>
            {/* ── Overlay ── */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeMenu}
            />

            {/* ── Sidebar Drawer ── */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col
                    transform transition-transform duration-300 ease-in-out md:hidden
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                    <Link to="/" onClick={closeMenu}>
                        <img src={logo} className="h-9 w-auto object-contain" alt="Logo" />
                    </Link>
                    <button
                        onClick={closeMenu}
                        className="text-gray-500 hover:text-red-500 transition-colors p-1"
                        aria-label="Close menu"
                    >
                        <FaTimes className="h-5 w-5" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {navLinks.map(({ to, label, icon }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={closeMenu}
                            className="flex items-center gap-3 px-5 py-3.5 text-gray-700 font-medium
                                border-l-4 border-transparent hover:border-brand-primary hover:bg-brand-primary-light
                                hover:text-brand-primary transition-all duration-200"
                        >
                            <span className="text-base">{icon}</span>
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Sidebar Footer — auth */}
                <div className="px-4 py-4 border-t border-gray-100 space-y-2">
                    {user ? (
                        <>
                            <Link
                                to="/admin/dashboard"
                                onClick={closeMenu}
                                className="block text-sm text-center text-brand-primary-dark font-semibold py-2"
                            >
                                👋Welcome, {user.name}
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="w-full py-2.5 rounded-lg bg-red-50 text-red-500 font-semibold
                                    hover:bg-red-100 transition-colors text-sm"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                onClick={closeMenu}
                                className="block text-center py-2.5 rounded-lg border-2 border-brand-primary-dark
                                    text-brand-primary-dark font-semibold hover:bg-blue-50 transition-colors text-sm"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                onClick={closeMenu}
                                className="block text-center py-2.5 rounded-lg bg-brand-primary
                                    text-white font-semibold hover:bg-brand-primary-dark transition-colors text-sm"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </aside>

            <div className="sticky top-0 z-30">
                {/* ── Top Utility Bar ── */}
                <motion.nav
                    initial={{ y: 0, opacity: 1 }}
                    animate={navControls}
                    className="backdrop-blur-md bg-white/75 supports-[backdrop-filter]:bg-white/75 border-b border-gray-100"
                >
                    <div className="hidden lg:block border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-gray-600">
                            <div className="flex items-center gap-3">
                                <span className="bg-gray-100 px-3 py-1 rounded">Hotline 24/7</span>
                                <span className="font-semibold text-gray-800">(025) 3886 25 16</span>
                            </div>

                            <div className="flex items-center gap-5">
                                <span className="hover:text-black cursor-pointer">Sell on Swoo</span>
                                <span className="hover:text-black cursor-pointer">Order Tracki</span>
                                <span className="flex items-center gap-1 hover:text-black cursor-pointer">USD <FaChevronDown className="text-[9px]" /></span>
                                <span className="flex items-center gap-1 hover:text-black cursor-pointer">Eng <FaChevronDown className="text-[9px]" /></span>
                            </div>
                        </div>
                    </div>

                    {/* ── Main Navbar ── */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">

                            {/* Logo */}
                            <Link to="/" className="text-2xl font-bold text-blue-600">
                                <img src={logo} className="h-10 w-auto object-contain" alt="Logo" />
                            </Link>

                            {/* Desktop Links */}
                            <div className="hidden lg:flex items-center space-x-8">
                                {navLinks.map(({ to, label }) => (
                                    <Link
                                        key={to}
                                        to={to}
                                        className="text-[13px] font-semibold uppercase tracking-wide text-gray-800 hover:text-brand-primary transition-all"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>

                            {/* Desktop Right — auth + cart */}
                            <div className="hidden lg:flex items-center gap-5">
                                <button
                                    type="button"
                                    className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-black transition flex items-center justify-center"
                                >
                                    <FaRegHeart className="text-sm" />
                                </button>

                                {user && (
                                    <Link to="/admin/dashboard" className="text-gray-700 font-semibold text-sm">
                                        Welcome, {user.name}
                                    </Link>
                                )}
                                {user ? (
                                    <button onClick={handleLogout} className="text-red-500 text-sm font-medium">
                                        Logout
                                    </button>
                                ) : (
                                    <div className="text-right leading-tight">
                                        <p className="text-[10px] uppercase tracking-wide text-gray-400">Welcome</p>
                                        <div className="flex items-center gap-1">
                                            <Link to="/login" className="text-[15px] font-semibold uppercase text-gray-800 hover:text-brand-primary transition-all">
                                                Log in
                                            </Link>
                                            <span className="text-gray-300">/</span>
                                            <Link to="/register" className="text-[15px] font-semibold uppercase text-gray-800 hover:text-brand-primary transition-all">
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                                )}
                                <Link to='/cart' className="relative border-l border-gray-200 pl-4">

                                    <FaShoppingCart
                                        className="h-5 w-5 text-gray-700
                                cursor-pointer hover:text-brand-primary transition-colors"
                                    />
                                    {totalQty > 0 && (
                                        <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center leading-none">
                                            {totalQty}
                                        </span>
                                    )}
                                    <p className="text-[10px] uppercase text-gray-400 mt-1">Cart</p>
                                </Link>
                            </div>


                            <div className="flex lg:hidden items-center gap-3">
                                <Link to="/cart" className="relative">
                                    <FaShoppingCart className="h-5 w-5 text-gray-700" />
                                    {totalQty > 0 && (
                                        <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center leading-none">
                                            {totalQty}
                                        </span>
                                    )}
                                </Link>
                                <button
                                    onClick={() => setMenuOpen(true)}
                                    className="text-gray-700 hover:text-brand-primary transition-colors p-1"
                                    aria-label="Open menu"
                                >
                                    <FaBars className="h-6 w-6" />
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.nav>

                <SubNavbar />
            </div>
        </>
    );
};

export default Navbar;
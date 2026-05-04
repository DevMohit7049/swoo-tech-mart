import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from '@/store/auth/authSlice';
import { loginUserApi } from '@/api/authApi';
import authIllustration from '@/assets/ecommerce/auth.png';
import ROUTE_PATHS from '@/constants/Routes';
import { showSuccess } from '@/utils/toast';

const Login = () => {

    const [apiError, setApiError] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;
        if (user.role === "admin") {
            navigate(ROUTE_PATHS.ADMIN_DASHBOARD, { replace: true });
        } else {
            navigate(ROUTE_PATHS.ROOT, { replace: true });
        }
    }, [user, navigate]);

    const loginSchema = yup.object({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(6, 'Password must be at least 6 characters').required("Password is required")
    });

    const { register,
        handleSubmit, formState: { errors, isSubmitting }, } = useForm({ resolver: yupResolver(loginSchema) });

    const loginSubmit = async (data) => {

        setApiError("");
        setIsLoggingIn(true);
        try {
            const payload = await loginUserApi(data);
            const user = payload?.user;
            const token =
                payload?.token ??
                payload?.accessToken ??
                user?.token ??
                null;
            dispatch(loginUser({ user, token }));
            showSuccess("Login Successful");
        } catch (error) {
            const message =
                error.response?.data?.message ||
                "Something went wrong. Please try again.";
            setApiError(message);
        } finally {
            setIsLoggingIn(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#eeeeee] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl bg-[#f3f3f3] border border-[#d9d9d9] rounded-md p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                    <div className="flex justify-center">
                        <img
                            src={authIllustration}
                            alt="Secure login"
                            className="w-full max-w-[400px] object-contain"
                        />
                    </div>

                    <div className="w-full max-w-[420px]">
                        <h2 className="text-[38px] leading-none font-extrabold text-brand-primary">Welcome Back</h2>
                        <p className="mt-2 text-[11px] tracking-[0.35em] text-[#9b9b9b] uppercase">Login to continue</p>

                        <form className="space-y-4 mt-6" onSubmit={handleSubmit(loginSubmit)}>
                            <div>
                                <label className="block text-[12px] text-[#373737] font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full h-[40px] px-3 bg-transparent border border-[#d6d6d6] rounded-[4px] text-sm placeholder:text-[#b9b9b9] focus:outline-none focus:ring-1 focus:ring-[#1fba36] focus:border-[#1fba36]"
                                    placeholder="Example@gmail.com"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-brand-red text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[12px] text-[#373737] font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full h-[40px] px-3 bg-transparent border border-[#d6d6d6] rounded-[4px] text-sm placeholder:text-[#b9b9b9] focus:outline-none focus:ring-1 focus:ring-[#1fba36] focus:border-[#1fba36]"
                                    placeholder="...."
                                    {...register("password")}
                                />
                                {errors.password && (
                                    <p className="text-brand-red text-sm">{errors.password.message}</p>
                                )}
                            </div>
                            <p className="pt-1 text-[12px] text-[#a4a4a4]">Forget Password ?</p>
                            <button
                                type="submit"
                                className="mt-1 w-[120px] h-[40px] bg-brand-primary text-white text-[12px] font-semibold rounded-md uppercase tracking-wide hover:bg-[#17912a] disabled:opacity-50"
                            >
                                {
                                    isLoggingIn && (
                                        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                                            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                {
                                    isLoggingIn ? "Processing..." : "Login"
                                }
                            </button>

                            {apiError && (
                                <div className="bg-red-100 text-brand-red px-4 py-2 rounded-lg text-sm">
                                    {apiError}
                                </div>
                            )}
                        </form>

                        <p className="text-[12px] mt-5 text-[#a4a4a4] uppercase">
                            New user ?{' '}
                            <Link to={ROUTE_PATHS.REGISTER} className="text-[#1fba36] hover:underline font-semibold">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
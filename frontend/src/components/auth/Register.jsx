import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import authIllustration from '@/assets/ecommerce/auth.png';
import { registerUserApi, sendOtp, verifyOtpApi } from '@/api/authApi';
import { showSuccess } from '@/utils/toast';
import ROUTE_PATHS from '@/constants/Routes';
import OtpModal from '@/components/UI/OtpModel';

const Register = () => {

    const [apiError, setApiError] = useState("");
    const navigate = useNavigate();

    const [showOtpModal, setShowOtpModal] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [verifiedEmail, setVerifiedEmail] = useState("");
    const [isSendingOtp, setIsSendingOtp] = useState(false);

    const registerSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phone: yup.string().matches(/^[0-9]{10}$/, "Phone must be 10 digits").nullable(),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: yupResolver(registerSchema) });
    const currentEmail = watch("email");

    const isValidEmail = (email = "") =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());


    const handleSendOtp = async () => {
        const email = getValues("email")?.trim();
        if (!isValidEmail(email)) {
            setApiError("Enter a valid email before OTP verification.");
            return;
        }
        try {
            setApiError("");
            setIsSendingOtp(true);
            await sendOtp({ email });
            setUserEmail(email);
            setShowOtpModal(true);
            showSuccess("OTP sent to your email");
        } catch (err) {
            setApiError(err.response?.data?.message || "Failed to send OTP");
        } finally {
            setIsSendingOtp(false);
        }
    };

    const onSubmit = async (data) => {
        setApiError("");
        try {
            if (!isEmailVerified || verifiedEmail !== data.email?.trim()) {
                setApiError("Please verify your email first.");
                return;
            }
            await registerUserApi(data);
            showSuccess("Registration successful");
            setTimeout(() => {
                navigate(ROUTE_PATHS.ROOT);
            }, 3000);

        } catch (err) {
            const message =
                err.response?.data?.message ||
                "Something went wrong. Please try again.";
            setApiError(message);
        }
    };


    const handleVerifyOtp = async (otp) => {
        try {
            await verifyOtpApi({ email: userEmail, otp });
            showSuccess("Email verified successfully");
            setIsEmailVerified(true);
            setVerifiedEmail(userEmail);
            setShowOtpModal(false);

        } catch (err) {
            setApiError(err.response?.data?.message || "Invalid OTP");
        }
    };


    return (
        <div className="min-h-screen bg-[#eeeeee] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl bg-[#f3f3f3] border border-[#d9d9d9] rounded-md p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                    <div className="flex justify-center">
                        <img
                            src={authIllustration}
                            alt="Secure registration"
                            className="w-full max-w-[400px] object-contain"
                        />
                    </div>

                    <div className="w-full max-w-[420px]">
                        <h2 className="text-[38px] leading-none font-extrabold text-brand-primary">Create Account</h2>
                        <p className="mt-2 text-[11px] tracking-[0.35em] text-[#9b9b9b] uppercase">Register to continue</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
                            <div>
                                <label className="block text-[12px] text-[#373737] font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"

                                    className="w-full h-[40px] px-3 bg-transparent border border-[#d6d6d6] rounded-[4px] text-sm placeholder:text-[#b9b9b9] focus:outline-none focus:ring-1 focus:ring-[#1fba36] focus:border-[#1fba36]"
                                    placeholder="Your name"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-brand-red text-sm">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[12px] text-[#373737] font-medium mb-2">Email Address</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="email"
                                        name="email"
                                        {...register("email", { onChange: () => {
                                                if (isEmailVerified) {
                                                    setIsEmailVerified(false);
                                                    setVerifiedEmail("");
                                                }
                                            },
                                        })}
                                        className="w-full h-[40px] px-3 bg-transparent border border-[#d6d6d6] rounded-[4px] text-sm placeholder:text-[#b9b9b9] focus:outline-none focus:ring-1 focus:ring-[#1fba36] focus:border-[#1fba36]"
                                        placeholder="Example@gmail.com"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleSendOtp}
                                        disabled={isSendingOtp}
                                        className="h-[40px] px-3 text-[11px] font-semibold uppercase tracking-wide bg-[#1fba36] text-white rounded-md hover:bg-[#17912a] disabled:opacity-60"
                                    >
                                        {isSendingOtp ? "Sending..." : "Send OTP"} 
                                    </button>
                                </div>
                                {isEmailVerified && verifiedEmail === currentEmail?.trim() && (
                                    <p className="text-green-600 text-sm mt-1">Email verified</p>
                                )}
                                {errors.email && (
                                    <p className="text-brand-red text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[12px] text-[#373737] font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    {...register("phone")}
                                    className="w-full h-[40px] px-3 bg-transparent border border-[#d6d6d6] rounded-[4px] text-sm placeholder:text-[#b9b9b9] focus:outline-none focus:ring-1 focus:ring-[#1fba36] focus:border-[#1fba36]"
                                    placeholder="Your phone number"
                                />
                                {errors.phone && (
                                    <p className="text-brand-red text-sm">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[12px] text-[#373737] font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password")}

                                    className="w-full h-[40px] px-3 bg-transparent border border-[#d6d6d6] rounded-[4px] text-sm placeholder:text-[#b9b9b9] focus:outline-none focus:ring-1 focus:ring-[#1fba36] focus:border-[#1fba36]"
                                    placeholder="...."
                                />
                                {errors.password && (
                                    <p className="text-brand-red text-sm">{errors.password.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-1 w-[120px] h-[40px] bg-[#1fba36] text-white text-[12px] font-semibold rounded-md uppercase tracking-wide hover:bg-[#17912a] disabled:opacity-50"
                            >
                                {
                                    isSubmitting && (
                                        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                                            <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                {isSubmitting ? "Submit..." : "Register"}

                            </button>
                            {apiError && (
                                <div className="bg-red-100 text-brand-red px-4 py-2 rounded-lg text-sm">
                                    {apiError}
                                </div>
                            )}
                        </form>

                        <p className="text-[12px] mt-5 text-[#a4a4a4] uppercase">
                            Already user ?{' '}
                            <Link to={ROUTE_PATHS.LOGIN} className="text-[#1fba36] hover:underline font-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= OTP MODAL ================= */}
            {showOtpModal && (
                <OtpModal
                    email={userEmail}
                    onClose={() => setShowOtpModal(false)}
                    onVerify={handleVerifyOtp}
                />
            )}
        </div>


    );
}

export default Register;
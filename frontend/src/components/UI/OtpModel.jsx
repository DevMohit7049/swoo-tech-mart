import { useState } from "react";

const OtpModal = ({ email, onClose, onVerify }) => {

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const handleVerify = async () => {
        if (!otp) return;
        setLoading(true);
        await onVerify(otp);
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-[350px]">
                <h2 className="text-lg font-bold mb-2">Verify Email</h2>

                <p className="text-sm text-gray-500 mb-4">
                    OTP sent to <span className="font-medium">{email}</span>
                </p>

                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full border px-3 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <div className="flex justify-between gap-2">
                    <button
                        onClick={onClose}
                        className="w-full py-2 bg-gray-300 rounded"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleVerify}
                        disabled={loading}
                        className="w-full py-2 bg-brand-primary text-white rounded"
                    >
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtpModal;

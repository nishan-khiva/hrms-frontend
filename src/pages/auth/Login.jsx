import { useState } from "react";
import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { loginUser, registerUser } from "../../api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] =
        useState(false);

    const [isLogin, setIsLogin] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] =
        useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            if (isLogin) {
                const response = await loginUser({
                    email: formData.email,
                    password: formData.password,
                });

                sessionStorage.setItem(
                    "token",
                    response.data.token
                );

                sessionStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );

                toast.success(response.message);

                navigate("/dashboard");
            } else {
                const response = await registerUser({
                    name: formData.name,
                    companyName: formData.companyName,
                    email: formData.email,
                    password: formData.password,
                });

                toast.success(
                    response.message ||
                    "Registration Successful"
                );

                setIsLogin(true);

                setFormData({
                    name: "",
                    email: "",
                    companyName: "",
                    password: "",
                });
            }

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-4 relative overflow-hidden">

            {/* Background Effects */}

            <div className="absolute top-[-120px] left-[-120px] w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Login Card */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.7,
                }}
                className="w-full max-w-6xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 border border-white"
            >

                {/* Left Side */}

                <div className="hidden md:flex flex-col justify-between relative overflow-hidden p-12 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">

                    {/* Animated Blobs */}

                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}
                        className="absolute top-0 left-0 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20"
                    />

                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                        }}
                        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20"
                    />

                    {/* Logo */}

                    <div className="relative z-10">
                        <div className="flex items-center gap-4">

                            <motion.div
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl"
                            >
                                👨‍💼
                            </motion.div>

                            <div>
                                <h1 className="text-4xl font-bold">
                                    HRMS Pro
                                </h1>

                                <p className="text-blue-200">
                                    Smart Workforce Management
                                </p>
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold mt-12 leading-tight">
                            Manage Your Workforce
                            <br />
                            With Confidence
                        </h2>

                        <p className="mt-5 text-blue-100 leading-relaxed max-w-md">
                            Streamline attendance, employee records,
                            leave management and HR operations from
                            one secure and modern platform.
                        </p>
                    </div>

                    {/* Stats Cards */}

                    <div className="relative z-10 grid grid-cols-2 gap-4">

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10"
                        >
                            <h3 className="text-3xl font-bold">
                                500+
                            </h3>
                            <p className="text-blue-200">
                                Employees
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10"
                        >
                            <h3 className="text-3xl font-bold">
                                98%
                            </h3>
                            <p className="text-blue-200">
                                Attendance
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10"
                        >
                            <h3 className="text-3xl font-bold">
                                24/7
                            </h3>
                            <p className="text-blue-200">
                                Access
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10"
                        >
                            <h3 className="text-3xl font-bold">
                                100%
                            </h3>
                            <p className="text-blue-200">
                                Secure
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* Right Side */}

                <div className="p-8 md:p-14 flex flex-col justify-center">

                    <div>

                        <div className="bg-gray-100 p-1 rounded-xl flex mb-8">

                            <button
                                type="button"
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${isLogin
                                    ? "bg-white shadow text-[#182456]"
                                    : "text-gray-500"
                                    }`}
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${!isLogin
                                    ? "bg-white shadow text-[#182456]"
                                    : "text-gray-500"
                                    }`}
                            >
                                Register
                            </button>

                        </div>

                        <h2 className="text-4xl font-bold text-gray-800">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>

                        <p className="text-gray-500 mt-2">
                            {isLogin
                                ? "Sign in to continue to your HRMS dashboard"
                                : "Create your HRMS account"}
                        </p>

                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {!isLogin && (
                            <div>

                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Full Name
                                </label>

                                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg focus-within:shadow-blue-100">

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full outline-none bg-transparent"
                                    />

                                </div>

                            </div>
                        )}

                        {!isLogin && (
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-700">
                                    Company Name
                                </label>

                                <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg focus-within:shadow-blue-100">

                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Enter company name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full outline-none bg-transparent"
                                    />

                                </div>
                            </div>
                        )}
                        {/* Email */}

                        <div>

                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg focus-within:shadow-blue-100">

                                <FiMail
                                    size={20}
                                    className="text-gray-400 mr-3"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full outline-none bg-transparent"
                                />

                            </div>

                        </div>

                        {/* Password */}

                        <div>

                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg focus-within:shadow-blue-100">

                                <FiLock
                                    size={20}
                                    className="text-gray-400 mr-3"
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full outline-none bg-transparent"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <FiEyeOff
                                            size={20}
                                            className="text-gray-500"
                                        />
                                    ) : (
                                        <FiEye
                                            size={20}
                                            className="text-gray-500"
                                        />
                                    )}
                                </button>

                            </div>

                        </div>

                        {/* Options */}

                        {isLogin && (
                            <div className="flex justify-between items-center text-sm">

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="accent-blue-600"
                                    />
                                    Remember Me
                                </label>

                                <button
                                    type="button"
                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Forgot Password?
                                </button>

                            </div>
                        )}

                        {/* Login Button */}

                        <motion.button
                            whileHover={{
                                scale: 1.02,
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#182456] hover:bg-[#182456] text-white py-3 rounded-xl font-semibold transition disabled:bg-blue-400"
                        >
                            {loading
                                ? isLogin
                                    ? "Signing In..."
                                    : "Creating Account..."
                                : isLogin
                                    ? "Sign In"
                                    : "Create Account"}
                        </motion.button>

                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        © 2026 HRMS. All rights
                        reserved.
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default Login;
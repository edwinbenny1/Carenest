import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary fake login validation
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
            <span className="text-white text-xl font-bold">⚡</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          AAL Admin Portal
        </h1>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Ambient Assisted Living Management System
        </p>

        {/* Form */}
        <form onSubmit={handleLogin}>

          <h2 className="text-lg font-medium text-gray-800 mb-1">Sign in</h2>
          <p className="text-sm text-gray-500 mb-4">
            Enter your credentials to access the admin dashboard
          </p>

          {/* Email */}
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="admin@aal.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
          >
            Sign in
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          Only authorized administrators can access this portal
        </p>
      </div>
    </div>
  );
};

export default Login;
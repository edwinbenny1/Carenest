import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // MOCK AUTH (for now)
    if (email === "admin@aal.com") {
      localStorage.setItem("role", "admin");
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-96">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">AAL Admin Portal</h1>
        <p className="text-gray-500 text-sm">
          Ambient Assisted Living Management System
        </p>
      </div>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="admin@aal.com"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
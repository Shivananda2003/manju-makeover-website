import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE } from "../config/routes";


function AdminLogin() {
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (!data.success) throw new Error("Invalid password");

    sessionStorage.setItem("adminAuth", "true");

    navigate(ADMIN_ROUTE);

    } 
    catch (err) {
      alert("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-accent-gold/40 bg-gradient-to-b from-neutral-900 to-black px-6 py-8 shadow-[0_0_40px_rgba(201,169,98,0.25)]">
        <h1 className="font-display text-2xl sm:text-3xl text-center mb-2">
          Admin Login
        </h1>
        <p className="text-center text-sm text-gray-300 mb-8">
          Enter the admin password to access the dashboard.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="admin-password"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-white/15 bg-black/40 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              placeholder="Enter admin password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-accent-gold text-black font-semibold text-sm hover:brightness-110 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;


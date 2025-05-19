import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/register
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usn: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login Data:" : "Register Data:", formData);
    // Add actual logic later
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        {isLogin ? "Login" : "Register"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded border-gray-300"
              required
            />
          </div>
        )}

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded border-gray-300"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">USN</label>
          <input
            type="text"
            name="usn"
            placeholder="Enter your USN number"
            value={formData.usn}
            onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
            onKeyDown={(e) => {
              const key = e.key;
              const isValid = /^[a-zA-Z0-9]$/.test(key);
              const allowedKeys = [
                "Backspace",
                "Tab",
                "ArrowLeft",
                "ArrowRight",
                "Delete",
              ];
              if (!isValid && !allowedKeys.includes(key)) {
                e.preventDefault();
              }
            }}
            className="w-full px-4 py-2 border rounded border-gray-300"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded border-gray-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 rounded hover:bg-black transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="text-gray-600 hover:text-black underline font-medium"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Login;
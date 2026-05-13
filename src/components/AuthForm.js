import React, { useState } from "react";
import "./AuthForm.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const url = "https://script.google.com/macros/s/AKfycbxATJaL4JZWH7t6w1cI_LwIn41SW24r2oQgqv_Ma93uXxd7MeVzDqIIGt7_7uXJphPM/exec";

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    alert("Data saved successfully ");
  };

  return (
    <div className="container">

      <div className="card">

        <h1 className="title">
          {isLogin ? "Welcome Back " : "Create Account "}
        </h1>

        <p className="subtitle">
          {isLogin ? "Login to continue" : "Register to get started"}
        </p>

        {/* NAME (only register) */}
        {!isLogin && (
          <div className="inputBox">
            <FaUser />
            <input
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        {/* EMAIL */}
        <div className="inputBox">
          <FaEnvelope />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="inputBox">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* CONFIRM PASSWORD (register only) */}
        {!isLogin && (
          <div className="inputBox">
            <FaLock />
            <input type="password" placeholder="Confirm Password" />
          </div>
        )}

        {/* BUTTON */}
        <button className="btn" onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        {/* SWITCH */}
        <p className="switch" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New here? Create account"
            : "Already have account? Login"}
        </p>

      </div>

    </div>
  );
}

export default AuthForm;
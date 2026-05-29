import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { email, password }
      );

      alert(response.data.message);
      navigate("/notes")
    } catch (error) {
      alert("Login failed");
    }
    
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "40px",

          
          background: "rgba(114, 84, 84, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",

          borderRadius: "20px",
          border: "1px solid rgba(0, 0, 0, 0.2)",

          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",

          textAlign: "center",
          color: "white",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Welcome Back
        </h1>

        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "white",
          }}
        />

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "25px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "white",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ffffff",
            color: "#764ba2",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "20px",
            color: "#f1f1f1",
          }}
        >
          Don't have an account?
          <Link
            to="/Signin"
            style={{
              color: "#fff",
              marginLeft: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
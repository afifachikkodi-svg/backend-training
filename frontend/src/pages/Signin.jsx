import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const create = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/signin",
        { name, email, password }
      );

      console.log(response);

      if (response) {
        alert("Account successfully created");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
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
          "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",

        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "40px",

          
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",

          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.3)",

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
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
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
          type="email"
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
          onClick={create}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#ffffff",
            color: "#ff758c",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Signin
        </button>

        <p
          style={{
            marginTop: "20px",
            color: "#fff",
          }}
        >
          Already have an account?
          <Link
            to="/"
            style={{
              color: "#fff",
              marginLeft: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
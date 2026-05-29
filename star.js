import React from "react";

export default function LoginPage() {
return ( <div style={styles.container}> <div style={styles.card}> <div style={styles.logo}>📚</div>

```
    <h1 style={styles.title}>Welcome Back</h1>

    <p style={styles.subtitle}>
      Login to continue learning with EduTeach
    </p>

    <form>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          style={styles.input}
        />
      </div>

      <div style={styles.options}>
        <label>
          <input type="checkbox" /> Remember me
        </label>

        <a href="/" style={styles.link}>
          Forgot Password?
        </a>
      </div>

      <button type="submit" style={styles.button}>
        Login
      </button>
    </form>

    <p style={styles.signup}>
      Don’t have an account?{" "}
      <a href="/" style={styles.signupLink}>
        Sign Up
      </a>
    </p>
  </div>
</div>


);
}

const styles = {
container: {
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
},

card: {
width: "380px",
background: "#fff",
padding: "35px",
borderRadius: "18px",
boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
},

logo: {
textAlign: "center",
fontSize: "45px",
marginBottom: "10px",
},

title: {
textAlign: "center",
color: "#1e293b",
marginBottom: "8px",
},

subtitle: {
textAlign: "center",
color: "#64748b",
marginBottom: "25px",
fontSize: "14px",
},

inputGroup: {
marginBottom: "18px",
},

label: {
display: "block",
marginBottom: "6px",
color: "#334155",
fontSize: "14px",
},

input: {
width: "100%",
padding: "12px",
border: "1px solid #cbd5e1",
borderRadius: "10px",
fontSize: "15px",
outline: "none",
},

options: {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "20px",
fontSize: "13px",
},

link: {
color: "#4f46e5",
textDecoration: "none",
},

button: {
width: "100%",
padding: "12px",
border: "none",
borderRadius: "10px",
background: "#4f46e5",
color: "#fff",
fontSize: "16px",
cursor: "pointer",
},

signup: {
marginTop: "18px",
textAlign: "center",
fontSize: "14px",
color: "#475569",
},

signupLink: {
color: "#06b6d4",
textDecoration: "none",
fontWeight: "bold",
},
};

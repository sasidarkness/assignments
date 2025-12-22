import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
   
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login</h2>
      <div style={styles.field}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div style={styles.field}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "300px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  field: {
    display: "flex",
    flexDirection: "column"
  }
};

export default LoginForm;
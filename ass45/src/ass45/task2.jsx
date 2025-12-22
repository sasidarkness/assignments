import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: ""
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
    // For now, just log the values
    console.log("Name:", formData.name);
    console.log("Age:", formData.age);
    console.log("Phone:", formData.phone);
    console.log("Email:", formData.email);
    // Here you’d typically send data to backend API
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Registration</h2>

      <div style={styles.field}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

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

      <button type="submit">Register</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "350px",
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

export default RegistrationForm;
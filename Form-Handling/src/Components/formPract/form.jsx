import React, { useState } from "react";

const FormHandling = () => {
  const [inputValue, setInputValue] = useState({ name: "", email: "", });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>output</h1>
       <input
  type="text"
  name="name"
  placeholder="Name"
  value={inputValue.name}
  onChange={handleChange}
/>

<input
  type="email"
  name="email"
  placeholder="Email"
  value={inputValue.email}
  onChange={handleChange}
/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormHandling;

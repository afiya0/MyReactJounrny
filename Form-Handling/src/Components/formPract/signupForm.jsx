import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });


    const HandleForm = (e) => {
    e.preventDefault();
    console.log("form Submited");
  };
  return 
  <>
  <div className="form">
    <h1> SignUp Form </h1>
    <form onSubmit={HandleForm}>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />
    </form>
  </div>
  </>;
};

export default SignUpForm;

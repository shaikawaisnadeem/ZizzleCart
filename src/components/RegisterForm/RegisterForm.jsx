import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="signupPage">
      <div className="headDiv">
        <h1>ZizzleCart</h1>
        <h2>Create a new account</h2>
        <p>Or <span>sign in to your account</span></p>
      </div>
      <form className="formData">
        <h1>Register</h1>
        <div className="nameDiv">
          <label htmlFor="nameId" className="name">Name</label>
          <input id="nameId" className="nameInput" placeholder="Enter Your Name" />
        </div>
        <div className="emailDiv">
          <label htmlFor="emailId" className="email">Email</label>
          <input id="emailId" className="emailInput" placeholder="Enter Your Email" />
        </div>
        <div className="passwordDiv">
          <label htmlFor="passwordId" className="password">Password</label>
          <input id="passwordId" className="passwordInput" placeholder="Create a Password" />
        </div>
        <div className="buttonDiv">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
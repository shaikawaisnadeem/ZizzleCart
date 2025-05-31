import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="signupPage">
      <div className="headDiv">
        <h1>ZizzleCart</h1>
        <h2>Sign in to your account</h2>
        <p>Or <span>create a new account</span></p>
      </div>
      <form className="formData">
        <h1>Login</h1>
        <div className="emailDiv">
          <label htmlFor="emailId" className="email">Email</label>
          <input id="emailId" className="emailInput" placeholder="Enter Your Email" />
        </div>
        <div className="passwordDiv">
          <label htmlFor="passwordId" className="password">Password</label>
          <input id="passwordId" className="passwordInput" placeholder="Enter Your Password" />
        </div>
        <div className="buttonDiv">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
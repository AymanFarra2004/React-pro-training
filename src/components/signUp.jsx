import '../styles/signUp.css';
import signImg from '../assets/images/signUp-logIn.png';
import { useState } from 'react';
import { NavLink } from 'react-router';

export default function SignUp() {
  return (
    <section className="sign-section">
      <SignImg />
      <main className="sign-mainContetnt">
        <SignTitle title="Create an account" />
        <SignUpForm />
      </main>
    </section>
  );
}
export function SignImg() {
  return (
    <div className="sign-img">
      <img src={signImg} alt="Sign Image" />
    </div>
  );
}
export function SignTitle({ title }) {
  return (
    <div>
      <h1 className="sign-title">{title}</h1>
      <h3 className="sign-desc">Enter your details below</h3>
    </div>
  );
}

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-create">
          Create Account
        </button>

        <GoogleButton text="Sign up with Google" />
      </form>

      <p className="login-text">
        Already have account? <NavLink to="/signin">Log in</NavLink>
      </p>
    </div>
  );
}

export function GoogleButton({ text }) {
  return (
    <button className="btn-google" type="button">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        alt="Google Logo"
      />
      {text}
    </button>
  );
}

import '../styles/signin.css';
import { SignImg } from './signUp';
import { SignTitle } from './signUp';
import { useState } from 'react';

export default function SignIn() {
  return (
    <section className="sign-section">
      <SignImg />
      <main className="sign-mainContetnt">
        <SignTitle title="Log in to Exclusive" />
        <SignInForm />
      </main>
    </section>
  );
}

function SignInForm() {
  const [formData, setFormData] = useState({
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

        <div className="signIn-btns">
          <button type="submit" className="log-in">
            Log In
          </button>
          <button type="submit" className="forget-password">
            Forget Password
          </button>
        </div>
      </form>
    </div>
  );
}

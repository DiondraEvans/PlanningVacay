import './index.css';
import { AppContext } from '../../contexts/app_context';
import { useState, useContext } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const GetSignUp = () =>  {
  let { setUser, user, showLoginForm, setShowLoginForm } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const handleChange = (event) => {
    const propertyName = event.target.name;
    setFormData({
      ...formData,
      [propertyName]: event.target.value,
      error: ''
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // do not refresh the page
    console.log("submitting!");

    // check if password has special character (error handling)
    const { confirm, error, ...data } = formData;

    try {
      const response = await axios({
        method: 'POST',
        url: "/users/signup",
        headers: {
          'Content-Type': 'application/json',
          },
        data: formData
      });
      console.log(response);
      setShowLoginForm(true);
    } catch (err) {
      setFormData({
        ...formData,
        error: err.message
      });
    }
  }

  const disable = formData.password !== formData.confirm;

  return (
    <div >
      <div className="Signup_square">
        <h1>Sign Up</h1>
        <form className="signup_form" autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}

export default GetSignUp;
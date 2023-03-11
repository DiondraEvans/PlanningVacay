import './index.css';
import React, { useEffect, useState, useContext } from 'react';
import { logIn, getUserFromSession } from '../../utilities/index'
import axios from 'axios'
import { AppContext } from '../../contexts/app_context';
import { Link, useNavigate, redirect } from 'react-router-dom';
const Login = () => {

    let { setUser } = useContext(AppContext);

    const [formState, setFormState] = useState({email: '', password: ''});
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setDisabled(formState.email && formState.password ? false : true);
    }, [formState])

    useEffect(() => {
      let autoLogin = async () => {
        await logIn({email: "w@w", password: "qqq"});
        // get session info (user)
        let user = await getUserFromSession()
        setUser(user);
      }
      autoLogin()
    }, [])

    const handleChange = (event) => {
        let propertyName = event.target.name;
        setFormState({
            ...formState,
            [propertyName]: event.target.value,
        });
      };

    const handleSubmit = async (e) => {
      // LOGIN
        // make a call to the server with this info and authenticate!
        e.preventDefault();
        
        await logIn(formState);
        // get session info (user)
        let user = await getUserFromSession()
        setUser(user);
        navigate("/")
    }

  return (
    <div>
        <div className="Login_square">
            <h1>Log in</h1>
        <form className="login_form" autoComplete="off" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={formState.email} onChange={handleChange} required />

            <label>Password</label>
            <input type="password" name="password" value={formState.password} onChange={handleChange} required />
            <button type="submit" disabled={disabled}>Log In</button>
        </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}

export default Login;
import './index.css';
import { AppContext } from '../../contexts/app_context';
import { useState, useContext } from 'react';
import Nav from '../../components/nav'
import { Outlet } from 'react-router-dom';
import SignupForm from '../../components/SignUp';
import LoginForm from '../../components/LogIn';
import UserLogOut from '../../components/LogOut';
function GetAuthPage() {
  let { showLoginForm, setShowLoginForm } = useContext(AppContext);

  const handleClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  return ( 
  <div className="Auth_page">
    < Nav />

    {showLoginForm ? <LoginForm /> : <SignupForm />} 
    
    <a href="#" onClick={handleClick} className="authpage_a">
      <p style={{textAlign : "center"}}>or</p> 
      {showLoginForm ? 'Sign Up' : 'Log In'}
    </a>
       
  </div>
  );
}

export default GetAuthPage;
import './index.css';
import Logo from '../nav/images/windbnb_logo.png'
import UserNotSignedIn from '../../images/user-icon.png'
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../../contexts/app_context';
import { getUserFromSession } from '../../utilities';
import { useState, useContext, useEffect } from 'react';
import Loader from "react-js-loader";
function Nav() {
  const [callWasMade, setCallWasMade] = useState(true);

  let { user, setUser} = useContext(AppContext);
  const [isResponsive, setIsResponsive] = useState(false);
  function toggleResponsive() {
    setIsResponsive(!isResponsive);
  }
console.log(user)
  // this will only run when we first open our app, or refresh the page

  // get user
  useEffect(() => {
    const getSession =  async () => {

      let userResponse = await getUserFromSession();
      setUser(userResponse)
     
    }
      getSession();

  }, []);
  const returnPage = () => {
    if (callWasMade) {
      return (
        <>
          { user ? 
            <div className="navbar">
            <div className="logo">
              <Link to ={`/`}>
                <img src={Logo} style={{width: "120px", height: "79px"}}></img>
              </Link>
            </div>
            <ul className="links">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/activetrips'}>Active trips</Link></li>
              <li>Online Experiences</li>
            </ul>
            <div className="account-area">
              <Link to={'/account'} className="sign_up_link"><p>{user.name}'s account</p></Link>
            </div>
          </div>
              :
              <div className="navbar">
              <div className="logo">
                <Link to ={`/`}>
                  <img src={Logo} style={{width: "120px", height: "79px"}}></img>
                </Link>
              </div>
              <ul className="links">
                <li><Link to={'/'}>Home</Link></li>
                
                <li>Online Experiences</li>
              </ul>
              <div className="account-area">
                <Link to={'/authpage'} className="sign_up_link"><p>Sign in</p><img src={UserNotSignedIn} className="user-sign-img"></img></Link>
              </div>
            </div>
          }
        </>
      )
    } else {
      return <div>
        <Loader />
      </div>
    }
  }
  return (
   <>{returnPage()}</>
  );
}

export default Nav;
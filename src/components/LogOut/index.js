import React, {useContext} from 'react'
import './index.css'
import axios from 'axios';
import { AppContext } from '../../contexts/app_context'
import { Link, useNavigate, redirect } from 'react-router-dom';

const UserLogOut = () => {
    const navigate = useNavigate();
    const { user, setName, setUser } = useContext(AppContext);

    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            const response = await axios({
              url: '/logout',
              method: 'POST',
              withCredentials: true,
            });
            console.log(response)
          } catch (error) {
            console.error(error);
          }
        // //user will be deleted/empty string on passport object which can be see on line 16 of utilities when getting session
        setUser(false)
        //user will be taken back to the home page
        navigate("/");
        console.log("logged out!")
    }

  return (
    <div className='user-logout'>
        <div>
            {user.name || "Guest"}
        </div>
        <div className="email">
            {user.email  || "Guest@guest.com"}
        </div>
        <button className="btn-sm" onClick={(e) => handleLogout(e)}>
            LOG OUT
        </button>
    </div>
  )
}

export default UserLogOut
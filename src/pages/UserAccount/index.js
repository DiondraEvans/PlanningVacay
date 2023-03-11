import React, {useContext} from 'react'
import './index.css'
import axios from 'axios';
import { AppContext } from '../../contexts/app_context'
import UserLogOut from '../../components/LogOut';

const UserAccount = () => {

  return (
    <div>
        <p>Account page</p>
        < UserLogOut />
    </div>
  )
}

export default UserAccount
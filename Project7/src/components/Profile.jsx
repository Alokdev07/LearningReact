import React,{useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
 if (!user) {
     return <div>please submit your data first</div>
 }else 
 return <div>Welcome {user.username}</div>
}

export default Profile

import React from 'react'
import "../Styles/Profile.css";

export default function Profile(props) {
  return (
    <div className='Profile'>
      <div className='ProfileContainer'>
        Profile page {props.user.email}
        </div>
      </div>
  )
}

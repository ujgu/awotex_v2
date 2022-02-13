import React from "react";
import "../Styles/Profile.css";

export default function Profile(props) {
  console.log(props);
  return (
    <div className="Profile">
      <div className="ProfileContainer">
        <div className="ProfileTop">
          Welcome to your profile, {props.user.name}!
        </div>
        <div className="ProfileContent">
          <div className="ProfileContentLeft">
            <h3>Name</h3> <p className="light">{props.user.name}</p>
            <h3>Nick</h3> <p className="light">{props.user.nickname}</p>
            <h3>Email</h3> <p className="light">{props.user.email}</p>
            <h3>Location</h3>{" "}
            <p className="light">{props.user.locale.toUpperCase()}</p>
          </div>
          <div className="ProfileContentRight">
            <div className="ProfilePic">
              <img src={props.user.picture} alt="Profile Pic" />
            </div>
            <h2>{props.user.name}</h2>
          </div>
        </div>
        <div className="ProfileContentBottom">
          <button onClick={props.onClick}>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

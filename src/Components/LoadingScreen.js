import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import awotexLogo from "../Assets/Images/awotex.png";
import "../Styles/LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="Loading">
      <div className="loadingContainer">
        <img src={awotexLogo} className="loadingLogoImage" alt="loading" />
        <MoonLoader size={40} color={"#f831ff"} />
      </div>
    </div>
  );
}

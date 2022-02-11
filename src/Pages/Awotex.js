import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Games from "../Pages/Games";
import "../Styles/Awotex.css";

export default function Awotex(props) {
  return (
    <div className="Awotex">
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navbar user={props.user} onClick={props.logout} />}>
          <Route path="" element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

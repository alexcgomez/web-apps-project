import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="div-navbar">
      <img id="navbarlogo" src="/media/logo.svg" alt="logo"/>
      <NavLink style={{textDecoration:"none",color:"black"}} to="/"><Button>Home</Button></NavLink>
      <NavLink style={{textDecoration:"none",color:"black"}} to="/top10"><Button>Top 10</Button></NavLink>
      <NavLink style={{textDecoration:"none",color:"black"}} to="/Contact"><Button>Contact</Button></NavLink>
    </div>
  );
}

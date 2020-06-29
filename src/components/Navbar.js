import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="div-navbar">
      <NavLink style={{textDecoration:"none",color:"black"}} to="/"><Button>Home</Button></NavLink>
      <Button>Search</Button>
      <NavLink style={{textDecoration:"none",color:"black"}} to="/top10"><Button>Top 10</Button></NavLink>
    </div>
  );
}

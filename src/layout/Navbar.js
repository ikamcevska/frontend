import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/" >Full Stack Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-ouline-light" to="/adduser">Add User</Link>
    
  </div>
</nav>
    </div>
  )
}

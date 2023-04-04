import React from "react";
import "./MainPage.css"
import {Link}from "react-router-dom"

export default function MainPage(){
    return (
        <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to = '/'> JOB EASY COMPANY</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to = '/home'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to = "/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to = "/jobs">Jobs</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to = "/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
           
        </div>
    )
}
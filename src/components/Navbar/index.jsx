import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

import { Link } from "react-router-dom"
import "./index.css"



const Navbar = () => {
  const [showBars, setshowBars] = useState(false);

  function onClickShowBars(){
    setshowBars(true)
  }

  function onClickHideBars(){
    setshowBars(false)
  }

  return (
    <div className='navbar-container'>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ "backgroundColor": "#1c1c1b" }}>
        <div className="container-fluid">
          <h1 className="navbar-brand main-logo">TANN TRIM</h1>
          <div className="navbar-links Link-4">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-Link navitem" to="/" >Men</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link navitem" to="/women" >Women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link navitem" to="/electronic">Electronic</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link navitem" to="/jewelery">Jewelery</Link>
              </li>
            </ul>
          </div>
          <div className='navbar-bars'>
            <FaBars onClick={onClickShowBars}/> {showBars && (<div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-Link navitem" to="/" >Men</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link navitem" to="/women" >Women</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link navitem" to="/electronic">Electronic</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link navitem" to="/jewelery">Jewelery</Link>
                </li>
              </ul>
              <FaTimes onClick={onClickHideBars}/>
            </div>)}
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar





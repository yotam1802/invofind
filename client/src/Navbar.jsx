import React from 'react'
import './css/Navbar.css'
import {Link, useLocation} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="homeContainer">
            <img className='logo' src="/images/inventory.png"/>
            <Link to="/" className='home'>InvoFind</Link>
        </div>
        <div className="links">
          <Link to="/tasks" className='tasks'>Tasks</Link>
          <Link to="/issues" className='issues'>Issues</Link>
          <Link to="/items" className='items'>Items</Link>
          <Link to="/users" className='users'>Users</Link>
        </div>
        <div>
            <Link to="/login" className='login'>Sign in</Link>
            <Link to="/register" className='register'>Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar

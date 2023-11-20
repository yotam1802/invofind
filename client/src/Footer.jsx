import React from 'react'
import './css/Footer.css'
import {Link, useLocation} from 'react-router-dom'

function Footer() {
  // const location = useLocation()

  // if (location.pathname === '/login') {
  //   return null
  // }

  return (
    <div className="footer">
        <div className="tou">Terms of Use</div>
        <div className="privacy">Privacy Policy</div>
        <div className="company">2023 InvoFind</div>
    </div>
  )
}

export default Footer

import React from 'react'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.header}>
      <nav className={style.navbar}>

        <div className={style.logo}>
          <h2>Afiya</h2>
        </div>

        <ul className={style.navLinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className={style.btn}>Hire Me</button>

      </nav>
    </div>
  )
}

export default Navbar
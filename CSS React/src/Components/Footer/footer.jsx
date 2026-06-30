import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContainer}>

        <div className={styles.footerAbout}>
          <h2>LUXE JEWELS</h2>
          <p>
            Timeless elegance crafted for every occasion.
            Discover luxury jewelry that tells your story.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Collections</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h3>Categories</h3>
          <ul>
            <li>Rings</li>
            <li>Necklaces</li>
            <li>Bracelets</li>
            <li>Earrings</li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Contact</h3>
          <p>Email: info@luxejewels.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Karachi, Pakistan</p>
        </div>

      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Luxe Jewels. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
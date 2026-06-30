import React from 'react'
import style from './hero.module.css'

const Landingpage = () => {
  return (
    <section className={style.hero}>

      <div className={style.heroContent}>
        <span className={style.tag}>✨ New Luxury Collection</span>

        <h1>
          Timeless Jewelry
          <br />
          For Every Occasion
        </h1>

        <p>
          Discover handcrafted necklaces, rings, and bracelets designed
          to add elegance and sparkle to your style.
        </p>

        <div className={style.heroButtons}>
          <button className={style.primaryBtn}>
            Explore Collection
          </button>

          <button className={style.secondaryBtn}>
            View Catalog
          </button>
        </div>
      </div>

      <div className={style.heroImage}>
        <img
          src="https://i.pinimg.com/736x/83/ac/52/83ac52236385da718aad6842327c9bed.jpg"
          alt="Jewelry"
        />
      </div>

    </section>
  )
}

export default Landingpage
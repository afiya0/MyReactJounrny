import React from 'react'
import product from './products.module.css'

const Products = () => {
  return (
    <section className={product.products}>

      <div className={product.sectionHeader}>
        <span>Our Collection</span>
        <h2>Featured Jewelry</h2>
        <p>Discover luxury pieces</p>
      </div>

      <div className={product.productGrid}>

        <div className={product.productCard}>
          <img
            src="https://images.unsplash.com/photo-1617038260897-a41a9f7?w=800"
            alt="ring"
          />
          <h3>Diamond Ring</h3>
          <p>$299</p>
          <button>Add to Cart</button>
        </div>

      </div>

    </section>
  )
}

export default Products
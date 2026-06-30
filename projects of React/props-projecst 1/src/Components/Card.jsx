import React from 'react'
import '../index.css'

const Card = ({badge,img,Rname,rDec,rTime,rServe,rLevel}) => {
  return (
      <div className="recipe-card">

        <div className="image-container">
          <span className="badge">
            <span className="badge-star">★</span> {badge}
          </span>

          <img 
            src={img} 
            alt="Lebanese Lemon Garlic Chicken" 
            className="recipe-image"
          />
        </div>

        <div className="card-content">
          <h2 className="title">{Rname}</h2>
          <p className="description">
            {rDec}
          </p>

          <div className="divider"></div>

          <div className="stats-container">
            <div className="stat-item">⏱ <span><strong>{rTime}</strong> mins</span></div>
            <div className="stat-item">👥 <span><strong>{rServe}</strong> serving</span></div>
            <div className="stat-item">🔥 <span><strong>{rLevel}</strong></span></div>
          </div>

          <div className="tags-container">
            <div className="tag">Yogurt</div>
            <div className="tag">Olive Oil</div>
            <div className="tag">+8</div>
          </div>

          <button className="btn-submit">Start Cooking</button>
        </div>

      </div>
  
  )
}

export default Card
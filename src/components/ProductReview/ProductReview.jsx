import React from 'react'
import './ProductReview.css'; 
const ProductReview = ({product}) => {
    const reviews = product.reviews || [];
  return (
     <div class="review-container">
        <h2 class="review-heading">Customer Reviews</h2>
        <div class="review-box">
             {reviews.map((review, index) => (
          <div key={index} className="review-box">
            <div className="review-header">
              <div className="review-user">
                <span className="user-name">{review.reviewerName || 'Anonymous'}</span>
                <span className="user-email">{review.reviewerEmail || 'No email'}</span>
              </div>
              <div className="review-date">{review.date || 'Date not available'}</div>
            </div>
            <p className="review-comment">{review.comment || review.body || 'No comment'}</p>
          </div>
        ))}
    </div>
    </div>
  )
}

export default ProductReview
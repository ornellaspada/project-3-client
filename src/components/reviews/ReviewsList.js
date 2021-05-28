function ReviewList({ text, image, userName, rating }) {
  return (
    <div className="card" >
      <div className="card-header">
        <div className="card-header-title">
          {userName}
        </div>
      </div>
      <div className="card-image">
        <figure className="image image-is-1by1">
          <img src={image} alt={userName} />
        </figure>
      </div>
      <div className="card-content">
        <p>{text}</p>
      </div>
      <div className="card-content">
        <p>{'⭐️ '.repeat(rating)}</p>
      </div>
    </div>
  )
}

export default ReviewList
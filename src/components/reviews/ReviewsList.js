function ReviewList({ text, image, userName, rating }) {
  return (
    <div className="card mb-5 show-page" >
      <div className="card-content texts">
        <p>{text}</p>
      </div>

      <div className="card-content texts">
        <p className="title is-5">Rating: {' ★ '.repeat(rating)}</p>
      </div>

      { image ? (
        <div className="card-image mx-5">
          <figure className="image image-is-1by1">
            <img src={image} alt={userName} />
          </figure>
        </div>
      ) : (
        ''
      )}
      
      <div className="card-content texts">
          Reviewed by {userName}
      </div>

    </div>
  )
}

export default ReviewList
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSinglePlace, deletePlace } from '../../lib/api'
import { isOwner } from '../../lib/auth'
import Error from '../common/Error'
import { useHistory } from 'react-router'

function PlaceShow() {
  const history = useHistory()
  const { placeId } = useParams()
  const [place, setPlace] = React.useState(null)
  const [ reviews, setReviews ] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !place && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSinglePlace(placeId)
        setPlace(res.data)
        setReviews(res.data.reviews)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [placeId])

  const handleDelete = async () => {
    await deletePlace(place._id)
    history.push('/map')
  }

  return (
    <>
      <section className="section">
        <div className="container">
          {isError && <Error />}
          {isLoading && <p>...loading</p>}
          {place && (
            <div>
              <h2 className="title has-text-centered">{place.name}</h2>
              <hr />
              <div className="columns">
                <div className="column is-half">
                  <figure className="image">
                    <img src={place.image} alt={place.name} />
                  </figure>
                </div>
                <div className="column is-half">
                  <h4 className="title is-4">
                    <span role="img" aria-label="plate">
                      🏆
                    </span>{' '}
                    Description
                  </h4>
                  <p>{place.description}</p>
                  <hr />
                  <h4 className="title is-4">
                    <span role="img" aria-label="globe">
                      📍
                    </span>{' '}
                    Adress
                  </h4>
                  <hr />
                  <p>{place.address}, {place.postcode}, {place.district}, {place.region}</p>
                  <hr />
                  <h6 className="title is-4">
                    <span role="img" aria-label="wave">
                      🖐
                    </span>{' '}
                    Added By
                  </h6>
                  <hr />
                  <p>{place.user.username}</p>
                  <hr />
                  <h6 className="title is-4">
                    <span role="img" aria-label="wave">
                      🚀
                    </span>{' '}
                    Rating
                  </h6>
                  <hr />
                  <p>
                  
                    {'⭐️ '.repeat(place.rating)}

                  </p>
                  <hr />
                  
                  {isOwner(place.user._id) && (
                    <div className="buttons">
                      <Link
                        to={`/places/${place._id}/edit`}
                        className="button is-warning"
                      > Edit
                      </Link>
                      <button onClick={handleDelete} className="button is-danger">
                        Delete this place
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <div>
                    <>
                      <Link to={`/places/${place._id}/review`}>
                        <button className="button"> Review this place</button>
                      </Link>
                    </>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="title has-text-centered">Reviews:</div>
        </div>

        <div className="columns is-multiline">
          <div className="column is-one-quarter-desktop is-one-third-tablet">
            {reviews.map(review => (
              <div className="card" key={review._id}>
                <div className="card-header">
                  <div className="card-header-title">{review.userName}</div>
                </div>
                <div className="card-image">
                  <figure className="image image-is-1by1">
                    <img src={review.image} alt={review.userName} />
                  </figure>
                </div>
                <div className="card-content">
                  <p>{review.text}</p>
                </div>
                <div className="card-content">
                  <p>{'⭐️ '.repeat(review.rating)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PlaceShow
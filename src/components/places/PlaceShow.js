import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSinglePlace, deletePlace } from '../../lib/api'
import { isOwner } from '../../lib/auth'
import Error from '../common/Error'

function PlaceShow() {
  const { placeId } = useParams()
  const [place, setPlace] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !place && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSinglePlace(placeId)
        setPlace(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [placeId])

  const handleDelete = async () => {
    await deletePlace(place._id)
    history.push('/places')
  }

  return (

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
                    🍽
                  </span>{' '}
                  Tasting Notes
                </h4>
                <p>{place.tastingNotes}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                    🌍
                  </span>{' '}
                  Origin
                </h4>
                <hr />
                <p>{place.origin}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="wave">
                    🖐
                  </span>{' '}
                  Added By
                </h4>
                <hr />
                <p>{place.user.username}</p>
                <hr />
                {isOwner(place.user._id) && (
                  <div className="buttons">
                    <Link
                      to={`/places/${place._id}/edit`}
                      className="button is-warning"
                    >
                    </Link>
                    <button onClick={handleDelete} className="button is-danger">
                      Delete this 
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PlaceShow
import React from 'react'
import { Link } from 'react-router-dom'
import { showMyFavs } from '../../lib/api'

function MyFav() {
  const [places, setPlaces] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await showMyFavs()
        setPlaces(res.data)
      } catch (err) {
        true
      }
    }
    getData()
  }, [])

  
  return (
    <>
      {places && places.map((place) => {
        return (
          <Link key={place._id} to={`/places/${place._id}`}>
            {' '}
            <div className="card show-page" key={place._id}>
              <div className="card-header">
                <h2 className="card-header-title title titles">{place.name}</h2>
              </div>
              <div className="card-image">
                <figure className="image image-is-1by1">
                  <img src={place.image} alt={place.name} />
                </figure>
              </div>
              <div className="card-content">
                <p className='texts'>{place.area}</p>
                <p>{' ★ '.repeat(place.rating)}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default MyFav

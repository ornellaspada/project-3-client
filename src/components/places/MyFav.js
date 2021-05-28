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
            <div>
              <p>{place.name}</p>
              <figure>
                <img src={place.image} alt={place.name} />
              </figure>
              <p>{place.area}</p>
              <p>{'⭐️ '.repeat(place.rating)}</p>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default MyFav

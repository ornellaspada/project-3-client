import React from 'react'
import { getPlacesWithFiveStars } from '../../lib/api'

function Home() {

  const [ places, setPlaces ] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? Get places with five stars (from api.js)
        const res = await getPlacesWithFiveStars()
        setPlaces(res.data)
        
      } catch (err) {
        {<p>Something went wrong!</p>}
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  // ? if page is blank 
  if (loading) {
    return <div className="loading-message">Loading... Mindblowing places will appear in just a moment!</div>
  }

  return (
    <>
      <section> 
        <div> 
          <h1>Trippy | Alternative places to visit in London</h1>
        </div>
        <div>
          <input type="text" placeholder="Search a place!" />
        </div>
      </section>
      <section>
        <div>
          <h1>Our top 10 of places to visit</h1>
        </div>
        <div>
          <div>
            {places.map(place => (
              <div key={place._id}>
                <p>{place.name}</p>
                <figure>
                  <img src={place.image} alt={place.name} />
                </figure>
                <p>{place.area}</p>
                <p>{place.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Home
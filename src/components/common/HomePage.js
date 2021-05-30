import React from 'react'
import { Link } from 'react-router-dom'

import { getAllPlaces, getPlacesWithFiveStars } from '../../lib/api'

function Home() {

  const [ bestPlaces, setBestPlaces ] = React.useState([])
  const [ allPlaces, setAllPlaces ] = React.useState([])
  const [ searchTerm, setSearchTerm ] = React.useState('')
  const [ searched, setSearched ] = React.useState([])
  const [ loading, setLoading ] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? Get places with five stars (from api.js)
        const res = await getPlacesWithFiveStars()
        setBestPlaces(res.data)
        
      } catch (err) {
        {<p>Something went wrong!</p>}
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  // ? Search logic

  React.useEffect(() => {
    const getData = async () => {
      try {
        // ? Get all places (from api.js)
        const res = await getAllPlaces()
        setAllPlaces(res.data)

      } catch (err) {
        {<p>Something went wrong!</p>}
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  console.log(allPlaces)

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }
  console.log(searchTerm)

  const filteredPlaces = allPlaces?.filter((place) => {
    return (
      (place.name.toLowerCase().includes(searchTerm)) || 
      (place.area.toLowerCase().includes(searchTerm)) ||
      (place.address.toLowerCase().includes(searchTerm))

    )
  })
  console.log(filteredPlaces)

  const handleSearch = () => {
    setSearched(filteredPlaces)
  }
  console.log(searched)

  // ? if page is blank 
  if (loading) {
    return <div className="loading-message">Loading... Mindblowing places will appear in just a moment!</div>
  }

  

  return (
    <>

      <section className="hero is-medium searchbar-section mx-5 my-5">
        <div className="hero-body">
          <div className="has-text-centered">
            <input onChange={handleInput} type="text" placeholder="Search a place" className="input is-medium is-rounded search-input"/>
            
            <button onClick={handleSearch} className="button is-black is-rounded ">Search!</button>
            
          </div>
        </div>
      </section>

      <section className="column is-one-quarter-desktop is-one-third-tablet">
        {searched ? searched.map(result => {
          return (
            <>
              <Link to={`/places/${result._id}`} >
                <div className="card show-page" key={result._id}>
                  <div className="card-header">
                    <h2 className="card-header-title titles">{result.name}</h2>
                  </div>
                  <div className="card-image">
                    <figure className="image image-is-1by1">
                      <img src={result.image} alt={result.name} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className='texts'>{result.area}</p>
                    <p>{'⭐️ '.repeat(result.rating)}</p>
                  </div>
                </div>
                <hr />
              </Link>
            </>
          )
        })
          :
          ''
        }
      </section>

      <section className="section">
        <div className="container">
          <div>
            <div className="title has-text-centered fav-title">Our favourite places:</div>
          </div>

          <div className="columns is-multiline">
            <div className="column is-one-quarter-desktop is-one-third-tablet">
              {bestPlaces.map(place => (
                <>
                  <Link to={`/places/${place._id}`} >
                    <div className="card" key={place._id}>
                      <div className="card-header">
                        <div className="card-header-title">{place.name}</div>
                      </div>
                      <div className="card-image">
                        <figure className="image image-is-1by1">
                          <img src={place.image} alt={place.name} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <p>{place.area}</p>
                        <p>{' ★ '.repeat(place.rating)}</p>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Home
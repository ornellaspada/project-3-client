import * as React from 'react'
import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'

import { getAllPlaces } from '../../lib/api'

function Map() {

  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 51.50853,
    longitude: -0.12574,
    zoom: 10,
  })

  const [places, setPlaces] = React.useState([])
  const [inHover, setHover] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const res = await getAllPlaces()
      setPlaces(res.data)
      console.log(res.data)
    }
    getData()
  }, [])

  const handleMouseEnter = (e) => setHover(e.target.value)

  const handleMouseLeave = () => setHover('')

  return (
    <>
      <ReactMapGL
        {...viewport} 
        width="100vw" 
        height="100vh"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxApiAccessToken={'pk.eyJ1IjoiZ3Vyc2hhbTIwMDEiLCJhIjoiY2twM3htaXFrMWVzdTJwbXc5cHNyc2U2ZSJ9.9elQEezX5LNrj6WyetkYFw'} >
        {places.map(place => (
          <div key={place._id}>
            <Marker longitude={place.long} latitude={place.lat}>
              <Link to={`/places/${place._id}`}>
                <div>
                  <button value={place._id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 📍 </button>
                  {inHover === place._id && <p>{place.name}<br/>{' ★ '.repeat(place.rating)}</p>}
                </div>
              </Link>
            </Marker>
          </div>
        ))}
      </ReactMapGL>
    </>
  )
}

export default Map
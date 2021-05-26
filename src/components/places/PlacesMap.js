import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'

function Map() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 51.50853,
    longitude: -0.12574,
    zoom: 10,
  })

  const [places, setPlaces] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/places')
      setPlaces(res.data)
      console.log(res.data)
    }
    getData()
  }, [])



  return (
    <>
      <ReactMapGL
        {...viewport} 
        width="100vw" 
        height="100vh"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={'pk.eyJ1IjoiZ3Vyc2hhbTIwMDEiLCJhIjoiY2twM3htaXFrMWVzdTJwbXc5cHNyc2U2ZSJ9.9elQEezX5LNrj6WyetkYFw'} >
        {places.map(place => (
          <div key={place._id}>
            <Marker longitude={place.long} latitude={place.lat}>
              <Link to={`/places/${place._id}`}>
                <button> 📍 </button>
              </Link>
            </Marker>
          </div>
        ))}
      </ReactMapGL>
    </>
  )
}

export default Map
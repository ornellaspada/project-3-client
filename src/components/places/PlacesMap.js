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
    zoom: 12,
    bearing: 0,
    pitch: 0,
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
        mapStyle='mapbox://styles/elsa24/ckpbnh5s2188u17mudjxkfwww'
        mapboxApiAccessToken={'pk.eyJ1IjoiZWxzYTI0IiwiYSI6ImNrcGJuaDJocjA5NTQycXJ0bDI0ZWJiZnoifQ.keu_rAoCALBw47nBeWBPKA'} >
        {places.map(place => (
          <div className='map' key={place._id}>
            <Marker longitude={place.long} latitude={place.lat}>
              <Link to={`/places/${place._id}`}>
                <div>
                  <button className='pins' value={place._id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 📍 </button>
                  {inHover === place._id && <><p className='pin-hover name'>{place.name}</p><small className='info'>Click the pin to see more info...</small></>}
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
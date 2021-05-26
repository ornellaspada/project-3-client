// import axios from 'axios'
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PlaceShow from '../src/components/places/PlaceShow'
import PlaceNew from '../src/components/places/PlaceNew'
// import Map from '../src/components/places/PlacesMap'

import Home from './components/common/HomePage'

function App() {

  // const [places, setPlaces] = React.useState([])

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/places')
  //     setPlaces(res.data)
  //     console.log(res.data)
  //   }
  //   getData()
  // }, [])

  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path="/places/new" component={PlaceNew} />
          <Route path="/places/:placeId" component={PlaceShow} />
          
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

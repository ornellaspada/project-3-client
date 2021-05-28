// import axios from 'axios'
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PlaceShow from './components/places/PlaceShow'
import PlaceNew from './components/places/PlaceNew'
import PlaceMap from './components/places/PlacesMap'
import MyFav from './components/places/MyFav'

import Home from './components/common/HomePage'
import NavBar from './components/common/NavBar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

// import { MapTouchEvent } from 'mapbox-gl'


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
        <NavBar /> 
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path = '/register' component ={Register}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/map' component={PlaceMap} />
          <Route path="/places/new" component={PlaceNew} />
          <Route path="/places/map" component={Map} />
          <Route path="/places/:placeId" component={PlaceShow} />
          <Route path="/favorites" component={MyFav} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

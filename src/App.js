// import axios from 'axios'
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

// import Map from '../src/components/places/PlacesMap'

import Home from './components/common/HomePage'
import NavBar from './components/common/NavBar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

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
          < Route exact path='/' component={ Home } />
          <Route path = '/register' component ={Register}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

import { Link, useHistory, useLocation } from 'react-router-dom'
import React from 'react'
import { isAuthorized, remove } from '../../lib/auth'

function NavBar() {
  const history = useHistory()
  const location = useLocation()
  const [isOpen, setIsOpen] = React.useState(false)
  const isLoggedIn = isAuthorized()

  const handleToggle = () => {
    setIsOpen(!isOpen)
    console.log('clicked')
  }
  const handleLogout = () =>{
    remove()
    history.push('/')
  }
  React.useEffect(()=>{
    setIsOpen(false)
  }, [location.pathname])

  return (
    <nav className='navbar is-dark'>
      <div className='container'>
        <div className='navbar-brand'> 
          <Link to = '/' className='navbar-item'>
        Home
          </Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/map" className="navbar-item" href='/'>
              Map
            </Link>
          </div>
          <div 
            className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isLoggedIn && <Link to ='/places' className='button is-white'>
          Create a place
                </Link>}
                {isLoggedIn && <Link to ='/favorites' className='button is-white'>
          My Fav
                </Link>}
                {!isLoggedIn &&  <Link to ='/register' className='navbar-item' href='/'>
                Register
                </Link>
                          
            

                }
                {!isLoggedIn ?
                  <>
                    <Link to = '/login' className='navbar-item' href='/'>
                  Log In
                    </Link> 
                  </>
                  :
                  <button className='button is-white' onClick= {handleLogout}>
                  Log out</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar
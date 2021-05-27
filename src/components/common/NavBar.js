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
    <nav className='navbar is-link'>
      <div className='container'>
        <div className='navbar-brand'> 
          <Link to = '/' className='navbar-item'>
            Home
          </Link>
          <Link to="/map" className="navbar-item" href='/'>
            Map
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
          <div 
            className="navbar-end ">
            <div className="navbar-item">
              <div className="buttons">
                {isLoggedIn && <Link to ='/places/new' className='button is-link'>
                  Submit a place
                </Link>}
                {isLoggedIn && <Link to ='/favorites' className='button is-link'>
                  My favourites
                </Link>}
                {!isLoggedIn &&  <Link to ='/register' className='navbar-item button is-info' href='/'>
                  Register
                </Link>
                }
                {!isLoggedIn ?
                  <>
                    <Link to = '/login' className='navbar-item button is-success' href='/'>
                      Log In
                    </Link> 
                  </>
                  :
                  <button className='button is-warning' onClick= {handleLogout}>
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
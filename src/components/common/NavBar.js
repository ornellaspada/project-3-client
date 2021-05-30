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
    <nav className='navbar navbar-style'>
      <div className='container'>
        <div className='navbar-brand'> 
          <Link to = '/' className='navbar-item has-text-light'>
            Home
          </Link>
          <Link to="/map" className="navbar-item has-text-light" href='/'>
           Map
          </Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span className="has-text-light" aria-hidden="true"></span>
            <span className="has-text-light" aria-hidden="true"></span>
            <span className="has-text-light" aria-hidden="true"></span>
          </span>
        </div>
        <div className={` navbar-style navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div 
            className="navbar-end ">
            <div className="navbar-item">
              <div className="navbar-item">
                {isLoggedIn && <div className='navbar-item'><Link to ='/places/new' className=" has-text-light">
                  Submit a place
                </Link></div>}
                {isLoggedIn && <div className='navbar-item'><Link to ='/favorites' className="has-text-light">
                  My Favourites
                </Link></div>}
                {!isLoggedIn &&  
                  <button className="navbar-item button button-nav"><Link to ='/register' className="link-nav" href='/'>Register</Link></button>
                
                }
                {!isLoggedIn ?
                  <button className="navbar-item button button-nav"><Link to = '/login' className=' link-nav' href='/'>Log In</Link> </button>
                  :
                  <button className='button button-nav' onClick= {handleLogout}>
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
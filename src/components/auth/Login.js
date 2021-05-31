import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

import { setToken } from '../../lib/auth'
import { useForm } from '../../hooks/useForm'

function Login(){
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)

  const { formData, handleChange } = useForm({
    email: '',
    password: '', 
  })
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
  
    try {
      const res = await axios.post('/api/login', formData)
      console.log(res)
      setToken(res.data.token)
      history.push('/places/map')
    } catch (err) {
      console.log(err.response)
      setIsError(true)
    }
  }
  const handleFocus = ()=>{
    setIsError(false) 
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="forms box column is-half is-offset-one-quarter" onSubmit={handleSubmit} >
            <div className="field">
              <label className="label labels">Email*</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onFocus={handleFocus}
              
                />
              </div>
            
            </div>
            <div className="field">
              <label className="label labels">Password*</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  onFocus={handleFocus}
                  onChange={handleChange}
                />
              </div>
              {isError && <small className='help is-danger'>Your credentials are incorrect</small>}
            </div>
            <div className="field">
              <button type="submit" className="button-submit button is-fullwidth is-black">
              Log me in!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Login
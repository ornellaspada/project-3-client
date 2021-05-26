import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { setToken } from '../../lib/auth'
import { useForm } from '../../hooks/useForm'

function Login(){
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)

  const { formdata, handleChange } = useForm({
    email: '',
    password: '', 
  })
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
  
    try {
      const res = await axios.post('http://localhost:3000/api/login', formdata)
      console.log(res)
      setToken(res.data.token)
      history.push('/map')
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
            className="box column is-half is-offset-one-quarter" onSubmit={handleSubmit} >
            <div className="field">
              <label className="label">Email</label>
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
              <label className="label">Password</label>
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
              <button type="submit" className="button is-fullwidth is-black">
            Log Me In!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Login
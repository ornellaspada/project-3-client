import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'

function Register (){
  const history = useHistory()
  const { formdata, formErrors, handleChange, setFormErrors } = useForm({
    
  })
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // const res = 
      console.log(formdata)
      const response = await axios.post('http://localhost:3000/api/register', formdata) 
      console.log(response)
      history.push('/login')
    }  catch  (err) {
      console.log(err.message)
      setFormErrors(err.response.data.errors)
    }
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form className='column is-half is-offset-one-quarter' onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="username"> Username
              </label>
              <div className="control">
                <input className={`input ${formErrors.username ? 'is-danger' : '' } `}
                  name="username" id="username" onChange={handleChange}
                  value={formdata.username} />
              </div>
              {formErrors.username && <small  className='helpis-danger' >Username is required</small>}
            </div>
            <div className="field">
              <label className="label" htmlFor="username"> Email
              </label>
              <div className="control">
                <input className={`input ${formErrors.email ? 'is-danger' : '' } `}
                  name="email" id="email" onChange={handleChange} 
                  value={formdata.email}/>
              </div>
              {formErrors.email && <small  className='help is-danger '> Email is required </small>}
            </div>
            <div className="field">
              <label className="label" htmlFor="username"> Email Confirmation
              </label>
              <div className="control">
                <input className={`input ${formErrors.emailConfirmation ? 'is-danger' : '' } `}
                  name="emailConfirmation" id="emailConfirmation" type="emailConfirmation" onChange={handleChange}
                  value={formdata.emailConfirmation}/>
              </div>
              {formErrors.emailConfirmation && <small  className='help is-danger '> Email Confirmation is required </small>}
            </div>
            <div className="field">
              <label className="label" htmlFor="username"> Password
              </label>
              <div className="control">
                <input className={`input ${formErrors.password ? 'is-danger' : '' } `}
                  name="password" id="password" type="password" onChange={handleChange}
                  value={formdata.password}/>
              </div>
              {formErrors.password && <small  className='help is-danger '> Password is required </small>}
            </div>
            <div className="field">
              <label className="label" htmlFor="username"> Password Confirmation
              </label>
              <div className="control">
                <input className={`input ${formErrors.passwordConfirmation ? 'is-danger' : '' } `}
                  name="passwordConfirmation" id="passwordConfirmation" type="password" onChange={handleChange}
                  value={formdata.passwordConfirmation}/>
              </div>
              {formErrors.passwordConfirmation && <small  className='help is-danger '> Password Confirmation is required </small>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-black">Register Me!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Register
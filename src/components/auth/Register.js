import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'

function Register (){
  const history = useHistory()
  const { formData, formErrors, handleChange, setFormErrors } = useForm({
    
  })
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // const res = 
      console.log(formData)
      const response = await axios.post('/api/register', formData) 
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
          <form className='forms column is-half is-offset-one-quarter' onSubmit={handleSubmit}>
            <div className="field">
              <label className="label labels" htmlFor="username"> Username*
              </label>
              <div className="control">
                <input className={`input ${formErrors.username ? 'is-danger' : '' } `}
                  name="username" id="username" onChange={handleChange}
                  value={formData.username} />
              </div>
              {formErrors.username && <small  className='help is-danger'>Username is required</small>}
            </div>
            <div className="field">
              <label className="label labels" htmlFor="username"> Email*
              </label>
              <div className="control">
                <input className={`input ${formErrors.email ? 'is-danger' : '' } `}
                  name="email" id="email" onChange={handleChange} 
                  value={formData.email}/>
              </div>
              {formErrors.email && <small  className='help is-danger '> Email is required </small>}
            </div>
            <div className="field">
              <label className="label labels" htmlFor="username"> Email Confirmation*
              </label>
              <div className="control">
                <input className={`input ${formErrors.emailConfirmation ? 'is-danger' : '' } `}
                  name="emailConfirmation" id="emailConfirmation" type="emailConfirmation" onChange={handleChange}
                  value={formData.emailConfirmation}/>
              </div>
              {formErrors.emailConfirmation && <small  className='help is-danger '> Email Confirmation is required </small>}
            </div>
            <div className="field">
              <label className="label labels" htmlFor="username"> Password*
              </label>
              <div className="control">
                <input className={`input ${formErrors.password ? 'is-danger' : '' } `}
                  name="password" id="password" type="password" onChange={handleChange}
                  value={formData.password}/>
              </div>
              {formErrors.password && <small  className='help is-danger '> Password is required </small>}
            </div>
            <div className="field">
              <label className="label labels" htmlFor="username"> 
                Password Confirmation*
              </label>
              <div className="control">
                <input className={`input ${formErrors.passwordConfirmation ? 'is-danger' : '' } `}
                  name="passwordConfirmation" id="passwordConfirmation" type="password" onChange={handleChange}
                  value={formData.passwordConfirmation}/>
              </div>
              {formErrors.passwordConfirmation && <small  className='help is-danger '> Password Confirmation is required </small>}
            </div>
            <div className="field">
              <button type="submit" className="button-submit button is-fullwidth is-black">Register me!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Register
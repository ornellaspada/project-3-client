import React from 'react'
import { useHistory } from 'react-router'
import  { useForm }  from '../../hooks/useForm'
import { createPlace } from '../../lib/api'

function CreateNewPlace() {
  const history = useHistory()
  const { formData, formErrors, handleChange, setFormErrors } = 
  useForm({
    name: '',
    area: '',
    address: '',
    postcodes: '',
    description: '',
    image: '',
    rating: '',
    lat: '',
    long: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createPlace(formData)
      history.push(`/places/${res.data._id}`)
    } catch (error) {
      setFormErrors(error.response.data.errors)
    }
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form 
            className='column is-half is-offset-one-quarter box'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <label className='label'>Name</label>
              <div className='control'>
                <input
                  className={`input ${formErrors.name ?
                    'is-danger' : '' }`}
                  placeholder='Name Of Place'
                  name='name'
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              {formErrors.name && <p className='help is-danger'>
                {formErrors.name}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Area</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.name ? 
                    'is-danger' : '' }`}
                  placeholder='Area'
                  name='area'
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>
              {formErrors.area && <p className='help is-danger'>
                {formErrors.area}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Address</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.address ? 
                    'is-danger' : '' }`}
                  placeholder='Address'
                  name='address'
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>
              {formErrors.address && <p className='help is-danger'>
                {formErrors.address}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Postcode</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.postcode ? 
                    'is-danger' : '' }`}
                  placeholder='Postcode'
                  name='postcode'
                  onChange={handleChange}
                  value={formData.postcode}
                />
              </div>
              {formErrors.postcode && <p className='help is-danger'>
                {formErrors.postcode}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Image</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.image ? 
                    'is-danger' : '' }`}
                  placeholder='Image Url'
                  name='image'
                  onChange={handleChange}
                  value={formData.image}
                />
              </div>
              {formErrors.image && <p className='help is-danger'>
                {formErrors.image}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Rating</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.rating ? 
                    'is-danger' : '' }`}
                  placeholder='Rating'
                  name='rating'
                  onChange={handleChange}
                  value={formData.rating}
                />
              </div>
              {formErrors.rating && <p className='help is-danger'>
                {formErrors.rating}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Latitude</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.lat ? 
                    'is-danger' : '' }`}
                  placeholder='Latitude'
                  name='latitude'
                  onChange={handleChange}
                  value={formData.lat}
                />
              </div>
              {formErrors.lat && <p className='help is-danger'>
                {formErrors.lat}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Longitude</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.long ? 
                    'is-danger' : '' }`}
                  placeholder='Longitude'
                  name='longitude'
                  onChange={handleChange}
                  value={formData.long}
                />
              </div>
              {formErrors.long && <p className='help is-danger'>
                {formErrors.long}
              </p>}
            </div>
            <div className='field'>
              <button type='submit' className='button is-dark is-fullwidth'>
                Create a place!!! Lets Go!
              </button> 
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CreateNewPlace
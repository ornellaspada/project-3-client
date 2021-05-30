import React from 'react'
import { useHistory } from 'react-router'
import  { useForm }  from '../../hooks/useForm'
import { createPlace } from '../../lib/api'
import { getCordinates } from '../../lib/api'

function CreateNewPlace() {
  const history = useHistory()
  const { formData, formErrors, handleChange, setFormErrors } = 
  useForm({
    name: '',
    area: '',
    address: '',
    postcode: '',
    description: '',
    categories: '',
    district: '',
    region: '',
    image: '',
    rating: '',
    lat: '',
    long: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const postCodeData = await getCordinates(formData.postcode)
    const postCodeResult = await postCodeData.data.result
    console.log(postCodeResult.region)
    console.log(postCodeResult.admin_district)    
    console.log(formData)
    try {
      
      const newFormData = { 
        ...formData, 
        lat: Number(postCodeResult.latitude),
        long: Number(postCodeResult.longitude),
        area: postCodeResult.admin_ward,
        region: postCodeResult.region,
        district: postCodeResult.admin_district,
      }
      console.log('this is it', newFormData)

      const res = await createPlace( newFormData )

      history.push(`/places/${res.data._id}`)
    } catch (error) {
      alert(error.response.data.message)
      setFormErrors(error.response.data.message)
    }
  
  }


  console.log(formData)
  return (
    <section className='section'>
      <div className='container'>
        <div className='title has-text-centered'>
          <h2 className='title-form'>Add a new place to the map:</h2>
        </div>
        <div className='columns'>
          <div className='forms column is-half is-offset-one-quarter box'>
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <label className='label labels'>Name*</label>
                <div className='control'>
                  <input
                    className={`input ${formErrors.name ?
                      'is-danger' : '' }`}
                    placeholder='Name Of Place'
                    name='name'
                    onChange={handleChange}
                  />
                </div>
                {formErrors.name && <p className='help is-danger'>
                  {formErrors.name}
                </p>}
              </div>
              <div className='field'>
                <label className='label labels'>Description*</label>
                <div className='control'>
                  <input 
                    className={`textarea ${formErrors.description ? 
                      'is-danger' : '' }`}
                    placeholder='Description'
                    name='description'
                    onChange={handleChange}
                  />
                </div>
                {formErrors.description && <p className='help is-danger'>
                  {formErrors.description}
                </p>}
              </div>
              <div className='field'>
                <label className='label labels'>Rating*</label>
                <div className='control'>
                  <input 
                    className={`input ${formErrors.rating ? 
                      'is-danger' : '' }`}
                    placeholder='Rate the place between 1 and 5'
                    name='rating'
                    onChange={handleChange}
                  />
                </div>
                {formErrors.rating && <p className='help is-danger'>
                  {formErrors.rating}
                </p>}
              </div>
              <div className='field'>
                <label className='label labels'>Address*</label>
                <div className='control'>
                  <input 
                    className={`input ${formErrors.address ? 
                      'is-danger' : '' }`}
                    placeholder='Address'
                    name='address'
                    onChange={handleChange}
                  />
                </div>
                {formErrors.address && <p className='help is-danger'>
                  {formErrors.address}
                </p>}
              </div>
              <div className='field'>
                <label className='label labels'>Postcode*</label>
                <div className='control'>
                  <input 
                    className={`input ${formErrors.postcode ? 
                      'is-danger' : '' }`}
                    placeholder='Postcode'
                    name='postcode'
                    onChange={handleChange}
                  />
                </div>
                {formErrors.postcode && <p className='help is-danger'>
                  {formErrors.postcode}
                </p>}
              </div>
              <div className='field'>
                <label className='label labels'>Image*</label>
                <div className='control'>
                  <input 
                    className={`input ${formErrors.image ? 
                      'is-danger' : '' }`}
                    placeholder='Image Url'
                    name='image'
                    onChange={handleChange}
                  />
                </div>
                {formErrors.image && <p className='help is-danger'>
                  {formErrors.image}
                </p>}
              </div>
              
              <div className='field'>
                <label className='label labels'>Categories*</label>
                <div className='control'>
                  <input 
                    className={`input ${formErrors.categories ? 
                      'is-danger' : '' }`}
                    placeholder='Categories ie. sports & leisure'
                    name='categories'
                    onChange={handleChange}
                  />
                </div>
                {formErrors.categories && <p className='help is-danger'>
                  {formErrors.categories}
                </p>}
              </div>
             
              <div className='field'>
                <button type='submit' className='button-submit button is-success is-fullwidth'>
                  Submit your place!
                </button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateNewPlace
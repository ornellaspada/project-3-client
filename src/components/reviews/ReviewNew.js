import React from 'react'
import { useHistory } from 'react-router'
import  { useForm }  from '../../hooks/useForm'
import { createReview } from '../../lib/api'


function CreateNewReview() {
  const history = useHistory()
  const { formData, formErrors, handleChange, setFormErrors } = 
  useForm({
    text: '',
    userName: '',
    image: '',
    rating: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      
      const res = await createReview()
      history.push(`/places/placeId/${res.data._id}`)
    } catch (error) {
      alert(error.response.data.message)
      setFormErrors(error.response.data.message)
    }
  
  }

  console.log(formData)

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form 
            className='column is-half is-offset-one-quarter box'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <label className='label'>Text</label>
              <div className='control'>
                <input
                  className={`input ${formErrors.name ?
                    'is-danger' : '' }`}
                  placeholder='Name Of Place'
                  name='name'
                  onChange={handleChange}

                  // value={formData.name}
                />
              </div>
              {formErrors.name && <p className='help is-danger'>
                {formErrors.name}
              </p>}
            </div>
            <div className='field'>
              <label className='label'>Username</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.area ? 
                    'is-danger' : '' }`}
                  placeholder='Area'
                  name='area'
                  onChange={handleChange}
                  // value={formData.area}
                />
              </div>
              {formErrors.area && <p className='help is-danger'>
                {formErrors.area}
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
                  // value={formData.image}
                />
              </div>
              {formErrors.image && <p className='help is-danger'>
                {formErrors.image}
              </p>}
            </div>
            
            <div className='field'>
              <button type='submit' className='button is-success is-fullwidth'>
                Post your review!
              </button> 
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CreateNewReview
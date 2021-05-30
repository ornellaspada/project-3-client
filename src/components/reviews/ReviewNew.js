import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import  { useForm }  from '../../hooks/useForm'
import { createReview, getSinglePlace } from '../../lib/api'
//import { Link } from 'react-router-dom'


function CreateNewReview() {
  const history = useHistory()

  const { formData, formErrors, handleChange, setFormErrors } = 
  useForm({
    text: '',
    userName: '',
    image: '',
    rating: '',
  })

  const { placeId } = useParams()


  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log('insideUseEffect')
        const res = await getSinglePlace(placeId)
        console.log(res, placeId, 'get single place Id')
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
          setFormErrors(error.response.data.message)
        }
      }
    } 
    getData()
  }, [placeId, setFormErrors])  

  const handleSubmit = async (e) => {
    e.preventDefault()

    
    try {

      const res = await createReview(formData, placeId)
      console.log(res)
      history.push(`/places/${placeId}`)
      
    } catch (error) {
      alert(error.response.data.message)
      setFormErrors(error.response.data.message)
    }
  
  }
  
  console.log(placeId, 'placeId')

  return (
    <section className='section'>
      <div className='container'>
        <div className='title has-text-centered'>
          <h2 className='title-form'>Write a review:</h2>
        </div>
        <div className='columns'>
          <form 
            className='forms column is-half is-offset-one-quarter box'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <label className='label labels'>Username*</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.userName ? 
                    'is-danger' : '' }`}
                  placeholder='Username'
                  name='userName'
                  onChange={handleChange}
                />
              </div>
              {formErrors.userName && <p className='help is-danger'>
                {formErrors.userName}
              </p>}
            </div>
            <div className='field'>
              <label className='label labels'>Review*</label>
              <div className='control'>
                <input
                  className={`textarea ${formErrors.text ?
                    'is-danger' : '' }`}
                  placeholder='Write your review'
                  name='text'
                  onChange={handleChange}
                />
              </div>
              {formErrors.text && <p className='help is-danger'>
                {formErrors.text}
              </p>}
            </div>
            
            <div className='field'>
              <label className='label labels'>Rating*</label>
              <div className='control'>
                <input 
                  className={`input ${formErrors.rating ? 
                    'is-danger' : '' }`}
                  placeholder='Rate the place from 1 to 5'
                  name='rating'
                  onChange={handleChange}
                />
              </div>
              {formErrors.userName && <p className='help is-danger'>
                {formErrors.userName}
              </p>}
            </div>
            <div className='field'>
              <label className='label labels'>Image</label>
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
              <button type='submit' className='button-submit button is-success is-fullwidth'>
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
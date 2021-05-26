import React from 'react'

export function useForm(initialFormData){
  const [formData, setFormData] = React.useState(initialFormData)
  const [formErrors, setFormErrors] = React.useState(initialFormData)

  const handleChange = (e) => {
    console.log('typing', e.target.name, e.target.value)


    if (e.target.name === 'lat' || e.target.name === 'long') {
      setFormData({ ...formData, [e.target.name]: Number(e.target.value) })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    setFormErrors({ ...formErrors, [e.target.name]: '' })

  }
  return {
    formData,
    formErrors,
    handleChange,
    setFormErrors,
    setFormData,
  }
}
export default useForm

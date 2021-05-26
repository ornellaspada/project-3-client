import React from 'react'

export default function useForm(intialState) {
  const [formData, setFormData] = React.useState(intialState)
  const [formErrors, setFormErrors] = React.useState(intialState)

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })

    setFormErrors({ ...formErrors, [event.target.name]: '' })
  }

  return {
    formData,
    formErrors,
    setFormErrors,
    setFormData,
    handleChange,
  }
}
import React from 'react'

export function useForm(initialFormdata){
  const [formdata, setFormdata] = React.useState(initialFormdata)
  const [formErrors, setFormErrors] = React.useState(initialFormdata)

  const handleChange = (e)=>{
  // console.log('typing', e.target.name, e.target.value)
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }
  return {
    formdata,
    formErrors,
    handleChange,
    setFormErrors,
    setFormdata,
  }
}
export default useForm
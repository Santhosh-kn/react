import { useState } from 'react'

function App() {
  const [form, setForm] = useState({ name: '', email: '' })

  const [errors, setErrors] = useState({ name: '', email: '' })

  function validateName(name) {
    if (name.trim() === '') {
      return 'Please enter name'
    }
    return ''
  }

  function validateEmail(email) {
    if (email.trim() === '') {
      return 'Please enter email'
    }
    if (!email.includes('@')) {
      return 'Please enter a valid email'
    }
    return ''
  }

  function handleChange(event) {
    const fieldName = event.target.name
    const fieldValue = event.target.value
    setForm(prev => ({ ...prev, [fieldName]: fieldValue }))

    setErrors(prev => {
      if (!prev[fieldName]) {
        return prev
      }

      if (fieldName === 'name') {
        return { ...prev, name: validateName(fieldValue)}
      }
      if (fieldName === 'email') {
        return { ...prev, email: validateEmail(fieldValue)}
      }
      return prev
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    const newErrors = { name: validateName(form.name), email: validateEmail(form.email) }
    setErrors(newErrors)
    if (newErrors.name || newErrors.email) {
      return
    }
    console.log('form submitted')
    console.log(form)
  }

  function handleEmailBlur() {
    setErrors(prev => ({ ...prev, email: validateEmail(form.email) }))
  }

  function reset() {
    setForm({ name: '', email: '' })
    setErrors({ name: '', email: '' })
  }

  return (
    <div>
      <div>{form.name}</div>
      <div>{form.email}</div>

      <form onSubmit={handleFormSubmit} noValidate>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <br />

        {errors.name && <p>{errors.name}</p>}

        <br />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleEmailBlur}
        />

        <br />

        {errors.email && <p>{errors.email}</p>}

        <br />

        <button type="submit">
          Submit
        </button>

        <button
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      </form>
    </div>
  )
}
export default App
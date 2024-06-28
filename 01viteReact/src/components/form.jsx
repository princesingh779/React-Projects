import {useState} from 'react'

export default function form() {
    const [form, setform] = useState({
        firstName: 'Prince',
        lastName: 'Singh',
        email: 'princesingh202002@gmail.com'
    });
  return (
      <>
          <label>
              First Name :
              <input
                  value={form.firstName}
                  onChange={e => {
                      setform({
                          ...form,
                          firstName: e.target.value
                  })
              }}/>
          </label>
          <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
      </>
  )
}



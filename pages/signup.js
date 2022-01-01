import { useState, useEffect } from 'react'
import Link from 'next/link'
import signupStyles from '../styles/Signup.module.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [message, setMessage] = useState('')

  //get first name
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  //get last name
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  //get email
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  //get password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  //get second password
  const handlePassword2Change = (e) => {
    setPassword2(e.target.value)
  }

  //submid register form
  const onSubmit = (e) => {
    //prevent browser default befabiour
    e.preventDefault()
    //if password1 and password2 are identical, send data to server
    if (password === password2) {
      fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, "/"',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          //set message to display to user
          setMessage(data.message)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <form className={signupStyles.loginFormContainer}>
      {message ? <span>{message}</span> : null}
      <div className={signupStyles.formLinks}>
        <Link href="/signup">
          <div className={signupStyles.register}>
            <FontAwesomeIcon
              className={signupStyles.checkIcon}
              icon={faCheck}
              size="lg"
            />
            <img src="/new-user.png" alt="new user" />
            <div className={signupStyles.content}>
              <h6>Register</h6>
              <p>Browse and find what you need.</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className={signupStyles.signin}>
            <img src="/login.png" alt="new user" />
            <div className={signupStyles.content}>
              <h6>Sign in</h6>
              <p>Already have an account, then welcome back.</p>
            </div>
          </div>
        </Link>
      </div>

      <div className={signupStyles.userName}>
        <input
          value={firstName}
          onChange={handleFirstNameChange}
          className={signupStyles.formControlUserName}
          placeholder="First Name*"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={handleLastNameChange}
          className={signupStyles.formControlUserName}
          placeholder="Last Name*"
          type="text"
          name="lastName"
          required
        />
      </div>
      <div className={signupStyles.formControlInput}>
        <input
          value={email}
          onChange={handleEmailChange}
          className={signupStyles.formControl}
          placeholder="Email*"
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />

        <input
          value={password}
          onChange={handlePasswordChange}
          className={signupStyles.formControl}
          placeholder="Password*"
          type="password"
          name="password"
          required
        />

        <input
          value={password2}
          onChange={handlePassword2Change}
          className={signupStyles.formControl}
          placeholder="Repeat Password*"
          type="password"
          name="password2"
          required
        />

        <input
          className={signupStyles.button}
          type="submit"
          value="Submit"
          onClick={onSubmit}
        />
      </div>
    </form>
  )
}

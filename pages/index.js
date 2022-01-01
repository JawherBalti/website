import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import loginStyles from '../styles/Index.module.css'
import Link from 'next/link'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function signup() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  //if there is a session, redirect user to home page
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      router.push('/home')
    }
  }, [])

  //get email value
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
//get password value
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

//submit login form
  const onSubmit = (e) => {
    //prevent browser default behaviour
    e.preventDefault()

    fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, "/"',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        //if login is successful, create session and redirect to home page
        if (data.cryptedCookie) {
          const cookie = data.cryptedCookie
          sessionStorage.setItem('token', cookie)
          router.push('/home')
        } else {
          //else display message to user
          setMessage(data.message)
        }
      })
  }

  return (
    <form className={loginStyles.loginFormContainer}>
      {message ? <span>{message}</span> : null}
      <div className={loginStyles.formLinks}>
        <Link href="/signup">
          <div className={loginStyles.register}>
            <img src="/new-user.png" alt="new user" />
            <div className={loginStyles.content}>
              <h6>Register</h6>
              <p>Browse and find what you need.</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className={loginStyles.signin}>
            <FontAwesomeIcon
              className={loginStyles.checkIcon}
              icon={faCheck}
              size="lg"
            />
            <img src="/login.png" alt="new user" />
            <div className={loginStyles.content}>
              <h6>Sign in</h6>
              <p>Already have an account, then welcome back.</p>
            </div>
          </div>
        </Link>
      </div>
      <input
        value={email}
        onChange={handleEmailChange}
        className={loginStyles.formControl}
        placeholder="Email*"
        type="email"
        name="email"
        required
      />

      <input
        value={password}
        onChange={handlePasswordChange}
        className={loginStyles.formControl}
        placeholder="Password*"
        type="password"
        name="password"
        required
      />
      <input
        className={loginStyles.button}
        type="submit"
        value="Submit"
        onClick={onSubmit}
      />
    </form>
  )
}

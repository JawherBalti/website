import { useEffect } from 'react'
import { useRouter } from 'next/router'
import homestyles from '../styles/Home.module.css'

function home() {
  const router = useRouter()

  useEffect(() => {
    //if there is no session, redirect user to login page
    if (!sessionStorage.getItem('token')) {
      router.push('/')
    }
  }, [])

  return (
    <div className={homestyles.homeContainer}>
      <div className={homestyles.logo}>
        <div className={homestyles.orange}></div>
        <div className={homestyles.blue}></div>
      </div>
      <h4 className={homestyles.text}>The Logo Above is Made in Pure CSS</h4>
    </div>
  )
}

export default home

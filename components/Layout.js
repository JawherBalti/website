import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import { useRouter } from 'next/router'

const Layout = ({ children}) => {
  const router = useRouter()
  return (
    //do not show nav component in home page
    router.pathname === "/home" ? (
      <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
    ) : (
      <div className={styles.container}>
      <Nav />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
    )
  )
}

export default Layout

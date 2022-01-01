import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
          <ul>
            <li>
              <Link href='/'>Sign in</Link>
            </li>
            <li>
              <Link href='/signup'>Register</Link>
            </li>
          </ul>
        </nav>
      )
}

export default Nav

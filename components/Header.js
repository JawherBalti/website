import headerStyles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerLeft}>
        <div className={headerStyles.logo}>
          <div className={headerStyles.orange}></div>
          <div className={headerStyles.blue}></div>
        </div>

        <h6>Home</h6>

        <h6>About us</h6>

        <h6>Contact us</h6>
      </div>
      <div className={headerStyles.headerRight}>
        <h6>Ar</h6>
      </div>
    </header>
  )
}

export default Header

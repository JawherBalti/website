import React from 'react'
import footerStyles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.logo}>
        <div className={footerStyles.orange}></div>
        <div className={footerStyles.blue}></div>
      </div>
      <span>&copy; All Rights Reserved</span>
    </div>
  )
}

export default Footer

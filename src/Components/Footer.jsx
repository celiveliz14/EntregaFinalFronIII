import React from 'react'
import { useContextGlobal } from './utils/global.context'


const Footer = () => {
  const {theme}=useContextGlobal()
  return (
    <footer className={theme === 'dark' ? 'dark-nav':''}>
        
        <img src='/images/DH.png' alt='DH-logo' className={theme === 'dark' ? 'digital-dark' : 'digital'} />
        <div>
          <img src='/images/ico-facebook.png' alt='facebook-logo' style={{margin:10, width: 25}}/>
          <img src='/images/ico-instagram.png' alt='instagram-logo' style={{margin:10, width: 25}}/>
          <img src='/images/ico-whatsapp.png' alt='whatsapp-logo' style={{margin:10, width: 25}}/>
          <img src='/images/ico-tiktok.png' alt='tiktok-logo' style={{margin:10, width: 25}}/>
        </div>
    </footer>
  )
}

export default Footer

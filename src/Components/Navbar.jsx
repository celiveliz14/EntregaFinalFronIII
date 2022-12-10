import React from 'react'
import {Link} from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
import '../index.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme,dispatch} = useContextGlobal()

  return (
    <nav className={theme === 'dark' ? 'dark-nav':''}>
      <p><span style={{color:"red"}}>D</span>H ODONTO</p>
      <div className='divLinks'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favs'>Favs</Link>
        {theme !== 'dark' ?
            <button className='dark' onClick={()=> dispatch({type:'SWITCH_DARK',})}>🌙</button>
            :
            <button className='' onClick={()=> dispatch({type:'SWITCH_LIGHT'})}>☀️</button>
        }
      </div>
    </nav>
  )
}

export default Navbar
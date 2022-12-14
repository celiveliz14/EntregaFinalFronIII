import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'


const Contact = () => {
  const {theme} = useContextGlobal()
  return (
    <article className={theme === 'dark' ? 'principal dark':'principal'}>
      <h2 style={{margin:0}}>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </article>
  )
}

export default Contact
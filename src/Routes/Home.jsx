import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import '../index.css';


const Home = () => {

  const {data,theme,loading,setLoading} = useContextGlobal()

  useEffect(() => {
    setTimeout(( ) => {
      setLoading(false)
    }, 2000)
  })

  return (
    <main className={theme === 'dark' ? 'principal dark':'principal'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {loading ? 'Cargando...' : data.map((card) => <Card card={card}  key={card.id}/>)}
      </div>
    </main>
  )
}

export default Home
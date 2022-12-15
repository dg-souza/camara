import { useEffect } from 'react'

import { api } from './services/api'

import './app.css'

const App = () => {
  useEffect(() => {
    api.post('/track')
      .then(res => {
        console.log(res)
      })
  }, [])

  return(
    <>
      
    </>
  )
}

export default App
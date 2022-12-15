import { useEffect, useState } from 'react'

import { api } from './services/api'

import './app.css'

import {
  Content,
  InputForm,
  Input
} from './utils/GlobalStyle'

import ListCard from './components/ListCard'

const App = () => {
  const [deputados, setDeputados] = useState([])
  const [deputadosFiltrados, setDeputadosFiltrados] = useState('')
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getAllDeputados()
  }, [])

  function getAllDeputados() {
    api.get('/deputados?itens=50')
      .then(res => {
        setDeputados(res.data.dados)
        console.log(deputados)
      })
  }

  function filterByName(value) {
    setSearchInput(value)
    if(value !== '') {
      const filteredResults = deputados.filter((item) => {
        return Object.values(item).join('').toLocaleLowerCase().includes(value.toLocaleLowerCase())
      })
      setDeputadosFiltrados(filteredResults)
    } else {
      setDeputadosFiltrados(deputados)
    }
  }

  return(
    <Content>
      <InputForm>
        <Input placeholder='Pesquise por deputado ou sigla do partido' onChange={(e) => filterByName(e.target.value)} />
      </InputForm>

      {
        searchInput.length > 0 ?
        <>
          <ListCard deputados={deputadosFiltrados} />
        </> :
        <>
          <ListCard deputados={deputados} />
        </>
      }
    </Content>
  )
}

export default App
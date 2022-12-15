import { useEffect } from 'react'

import { api } from './services/api'

import './app.css'

import {
  Content,
  InputForm,
  Input
} from './utils/GlobalStyle'

import ListCard from './components/ListCard'

const App = () => {
  useEffect(() => {
  }, [])

  return(
    <Content>
      <InputForm>
        <Input />

        <select>
          <option>Teste</option>
          <option>Teste2</option>
        </select>
      </InputForm>

      <ListCard />
    </Content>
  )
}

export default App
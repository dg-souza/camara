import Card from '../Card'

import { useEffect } from 'react'

import {
    List
} from './style'

const ListCard = props => {
    const {
        deputados
    } = props

    const data = [{ nome: 'Servini', partido: 'PT' }, { nome: 'Matheus', partido: 'partido22' }]

    useEffect(() => {
        console.log(data)
    }, [])

    return(
        <List>
            {
                deputados.map((item) => 
                    <Card dados={item} />
                )
            }
        </List>
    )
}

export default ListCard
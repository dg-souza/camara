import Card from '../Card'

import { useEffect } from 'react'

import {
    List
} from './style'

const ListCard = props => {
    const {
        
    } = props

    const data = [{ nome: 'Servini', partido: 'PT' }, { nome: 'Matheus', partido: 'partido22' }]

    useEffect(() => {
        console.log(data)
    }, [])

    return(
        <List>
            {
                data.map((item) => 
                    <Card dados={item} />
                )
            }
        </List>
    )
}

export default ListCard
import { useEffect } from 'react'

import {
    CardContent
} from './style'

const Card = props => {
    const {
        dados
    } = props

    useEffect(() => {
        console.log(dados)
    }, [])

    return(
        <CardContent>
            <h1>{ dados.nome }</h1>
            <h2>{ dados.partido }</h2>
        </CardContent>
    )
}

export default Card
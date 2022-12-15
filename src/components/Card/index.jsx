import { useEffect } from 'react'

import {
    CardContainer
} from './style'

const Card = props => {
    const {
        dados
    } = props

    useEffect(() => {
        console.log(dados)
    }, [])

    return(
        <CardContainer>
            <img src={dados.urlFoto} />

            <div className='card-content'>
                <div className='card-header'>
                    <span><b>{ dados.nome }</b> - { dados.siglaPartido }</span>
                </div>

                <div className='card-body'>
                    <span><b>Estado: </b>{dados.siglaUf}</span>
                </div>

                <div className='card-footer'>
                    <button>Visualizar Gastos</button>
                </div>
            </div>
        </CardContainer>
    )
}

export default Card
import styled from "styled-components"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 20px; 
`

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-right: 10px;
`

export const InputForm = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    select {
        width: 20%;
        border: 0;
        box-shadow: 0px 1px 15px -4px #000000;
    }
`
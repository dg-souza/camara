import styled from "styled-components"

export const CardContainer = styled.div`
    background: #0C5E3D;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    box-shadow: 0px 1px 15px -4px #000000;

    img {
        width: 200px;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        width: 100%;

        .card-header {
            display: flex;
            flex-direction: row;
            padding: 15px;
    
            span {
                font-size: 3rem;
                color: #fff;
            }
        }

        .card-body {
            padding: 15px;

            span {
                color: #fff;
                font-size: 2rem;
            }
        }

        .card-footer {
            padding: 10px;
            display: flex;
            justify-content: flex-end;

            button {
                cursor: pointer;
                border: 0;
                padding: 20px;
                font-size: 20px;
                border-radius: 4px;
            }
        }
    }
`
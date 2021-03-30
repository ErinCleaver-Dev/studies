import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Algorithms() {
    return (
        <Container>
            <Helmet>
                <title>Algorithms</title>
            </Helmet>
            <Body>
                place Holder for Algorithms page
            </Body>
        </Container>
    )
}

export default Algorithms

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
const Body = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    background-color: white;
    width: 70vh;
    justify-content: center;
`
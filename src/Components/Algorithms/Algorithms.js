import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Algorithms() {
    return (
        <Container>
            <Helmet>
                <title>Algorithms</title>
            </Helmet>
        </Container>
    )
}

export default Algorithms

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
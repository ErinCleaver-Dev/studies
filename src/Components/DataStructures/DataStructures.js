import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function DataStructures() {
    return (
    <Container>
        <Helmet>
            <title>Data Structures</title>
        </Helmet>
    </Container>
    )
}

export default DataStructures

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Homework() {
    return (
    <Container>
        <Helmet>
            <title>Homework</title>
        </Helmet>
    </Container>
    )
}

export default Homework


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
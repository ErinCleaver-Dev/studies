import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';


function Notes() {
    return (
    <Container>
        <Helmet>
            <title>Notes</title>
        </Helmet>
    </Container>
    )
}

export default Notes


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
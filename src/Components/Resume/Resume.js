import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Resume() {
    return (
    <Container>
        <Helmet>
            <title>Resume</title>
        </Helmet>
    </Container>
    )
}

export default Resume

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
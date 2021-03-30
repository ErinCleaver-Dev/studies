import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Projects() {
    return (
    <Container>
        <Helmet>
            <title>Projects</title>
        </Helmet>
    </Container>
    )
}

export default Projects


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <Container>
            <Helmet>
                <title>Home</title>
            </Helmet>
        </Container>
    )
}

export default Home


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 700px;
`
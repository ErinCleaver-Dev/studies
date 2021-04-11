import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <Container>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Introduction>
                    <p>Hello, My name is Erin</p>
                    <p>I am currently studying react in hopes of finding a job working with the lanague.</p>
            </Introduction>
            <Picture>
                <img src="https://i.imgur.com/pv9TKMx.jpg"></img>
            </Picture>
        </Container>
    )
}

export default Home


const Container = styled.div`
    display: flex;
    background-color: #ccc5b1;
    justify-content: center;
    height: 700px;
    width: 100%;
`

const Introduction = styled.div`
    margin-top: 20px;
    color: black;
    height: 200px;
    width: 70vh;
    background-color: white;
    border-radius: 20px;
    padding-left: 20px;
    margin-right:  20px;
`

const Picture = styled.div`
    margin-top: 20px;
    height: 200px;
    img {
        height: 100%;
        border-radius: 20px;
    }
`;
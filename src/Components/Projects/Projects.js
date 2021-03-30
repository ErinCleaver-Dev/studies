import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Project from './Project'

function Projects() {
    return (
    <Container>
        <Helmet>
            <title>Projects</title>
        </Helmet>
        <Body>
            <Project 
            link="https://amazonclone-ecleaver.netlify.app/" 
            imageUrl="https://i.imgur.com/vePKgzn.png" 
            alt="Link to amazon Clone" 
            title="Amazon Clone"
            description="A clone of the amazon website." />
        </Body>
    </Container>
    )
}

export default Projects



const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 100vh;
`
const Body = styled.div`
    margin: 10px;
    padding: 10px;
`
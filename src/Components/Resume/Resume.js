import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Resume() {
    return (
    <Container>
        <Helmet>
            <title>Resume</title>
        </Helmet>
        <Body>
            <ContactInformtion>

            </ContactInformtion>
            <EmployementHistory>
            </EmployementHistory>
            <EducationHistory>
            </EducationHistory>
        </Body>
    </Container>
    )
}

export default Resume


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
const ContactInformtion = styled.div`

`
const EmployementHistory = styled.div`

`

const EducationHistory = styled.div`

`
const Skills = styled.div`

`
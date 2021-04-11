import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import  Notes  from './Notes';
import * as Python_Notes from '../../Data/Notes.json'


function PythonNotes() {
    return (
    <Container>
        <Helmet>
            <title>Python Notes</title>
        </Helmet>
        <Body>
            
            <Notes notes={Python_Notes.Python_Notes}/>
           
        </Body>
    </Container>
    )
}

export default PythonNotes



const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ccc5b1;
    height: 100%;
`
const Body = styled.div`
    margin: 10px;
    padding: 10px;
    display: flex;
    background-color: white .1;
    justify-content: center;
`
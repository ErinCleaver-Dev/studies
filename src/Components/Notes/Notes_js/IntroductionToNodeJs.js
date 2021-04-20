import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import  Notes  from '../Notes'
import * as Node_js from '../../../Data/Node.js Notes/Node_js_Note.json';


function IntroductionToNodeJs() {
    return (
    <Container>
        <Helmet>
            <title>Node.js Notes</title>
        </Helmet>
        <Body>
            
            <Notes notes={Node_js.Introduction}/>
           
        </Body>
    </Container>
    )
}

export default IntroductionToNodeJs



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
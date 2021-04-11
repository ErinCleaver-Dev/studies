import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Homework from './Homework';
import * as Python_Homework from "../../Data/Python_Home_Work.json"

const PythonHomework = () => {
    return (
        <Container>
        <Helmet>
            <title>Python Homework</title>
        </Helmet>
        <Body>
            {Python_Homework.Python_Homework.map((homework) =>
             <Homework homework={homework}/>
            )}
           
        </Body>
     </Container>
    )

}



export default PythonHomework

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ccc5b1;
    padding: 20px;
`
const Body = styled.div`
    margin: 10px;
    padding: 20px;
    display: flex;
    background-color: white;
    width: 50%;
    justify-content: center;
`
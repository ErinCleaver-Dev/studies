import React from 'react'
import styled from 'styled-components';
import Code from '../../Helpers/Code'

function Homework({homework}) {
    return (
    <Container>
         <TitleSection key={homework.id}>{homework.Section}</TitleSection>
         <SubTitleSection key={homework.id}>{homework.SubTitle}</SubTitleSection>
         
         <CodeSubsection key={homework.id}>
            {homework.Assignments.map((assignment) => (
                <Code example={assignment}/>
            ))
            
            }
         </CodeSubsection>
    </Container>
    )
}

export default Homework


const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

const TitleSection = styled.div`
    border-bottom: 1px solid black;
    padding-left: 5px;
    font-size: 30px;
    font-weight: bold;
`
const SubTitleSection = styled.div`
    border-bottom: 1px solid black;
    padding-left: 60px;
    font-size: 25px;
    font-weight: bold;
`
const CodeSubsection = styled.div`
  
`

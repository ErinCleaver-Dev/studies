import React from 'react'
import styled from 'styled-components';
import Code from '../../Helpers/Code'


const Notes = ({notes}) => {


    return (
        <Container>
            <Accordion>
                {notes.map((note) => (
                    <div >         
                        <AccordionButton type="botton">
                            <TitleSection key={note.id}> {note.Section}</TitleSection>
                        </AccordionButton>
                        <BodySection>
                        <List>
                            
                            {
                                <ul>
                                {note.List.map((list, id2) => (
                                    <li key={id2}>{list.Point}</li>
                                ))}
                                </ul>

                            }
                        </List>
                        
                            {
                                
                                note.Example.map((example) => (
                                  <ExampleSection>

                                  <Code example={example}/>
                                  </ExampleSection>

                                ))
                                
                            }
                        </BodySection>
                    </div>   
                ))}
            </Accordion>

                    
        </Container>
    )
}

export default Notes

const ExampleSection = styled.div`
    border: 2px solid #17332f;

`
const Container = styled.div`

`
const Accordion = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 30px;
`
const AccordionButton = styled.button`
    width: 100%;
    background-color: #c4e3ac;
    color: #444;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    border: 2px solid #17332f;

`

const TitleSection = styled.label`

    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 30px;
`

const BodySection = styled.div`
    padding: 1em 1em;
    background-color: white;
`


const List = styled.div`
`

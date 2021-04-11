import React, { useState} from 'react'
import styled from 'styled-components';



const Notes = ({notes, parentData}) => {

    let count =0;
    let hidden = "hidden";
    return (
        <Container>
            <Accordion>
                {notes.map((note) => (
                    <div>         
                        <AccordionButton type="botton" id={"check" . count}>
                            <TitleSection> {note.Section}</TitleSection>
                        </AccordionButton>
                        <BodySection>
                            <ul>
                                {note.List.map((notesLists) => (
                                    <li>
                                        {notesLists.Point}
                                    </li>
                                ))}
                            </ul>
                        </BodySection>
                    </div>   
                ))}
            </Accordion>

                    
        </Container>
    )
}

export default Notes


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
    padding: 0 1em;
    background-color: white;
   `
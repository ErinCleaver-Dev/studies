import React from 'react'
import styled from 'styled-components';

function Project({imageUrl, link, altText, title, description}) {
    return (
       <Container>
           <ImageContainer>
            <a href={link}>
                <img src={imageUrl} alt={altText}></img>
            </a>
           </ImageContainer>
           <Description>
                <h1>Name: {title}</h1>
                <h2>Deciprtion:</h2>
                <p>{description}</p>

           </Description>
       </Container>
    )
}

export default Project

const Container = styled.div`
    display: flex;
    max-width: 100vh;
    height: 300px;
    padding: 30px;
    border-radius: 25px;
    background-color: white;
    align-items: center;
    box-shadow: 0 0 5px;

    :hover {
        width: 110vh;
        height: 320px;
        background-color: #dfe6f2;
        box-shadow: 0 0 5px;
    }
`
const ImageContainer = styled.div`
    flex: .8;
    max-height: 280px;
    border-radius: 10px;
    a: {
        
    }
    img {
        max-height: 280px;
        border-radius: 10px;
    }
`

const Description = styled.div`
    align-self: top;
    flex: .40;
    padding: 10px;
`

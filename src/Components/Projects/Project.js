import React from 'react'
import styled from 'styled-components';

function Project({imageUrl, link, altText}) {
    return (
       <Container>
           <ImageContainer>
            <a href={link}>
                <img src={imageUrl} alt={altText}></img>
            </a>
           </ImageContainer>
           <Description>
                <h2>Deciprtion:</h2>
                <p>A clone of the amazon website.</p>

           </Description>
       </Container>
    )
}

export default Project

const Container = styled.div`
    display: flex;
    width: 100vh;
    height: 300px;
    padding: 30px;
    border-radius: 25px;
    background-color: white;
    align-items: center;
`
const ImageContainer = styled.div`
    flex: .8;
    height: 280px;
    border-radius: 10px;
    a: {
        
    }
    img {
        height: 100%;

    }
`

const Description = styled.div`
    align-self: top;
    flex: .2;
    padding: 10px;
`

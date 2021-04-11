import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';


function Project({imageUrl, link, altText, title, description, github}) {
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
                <a href={github} alt={altText}>{<GitHubIcon/>}</a>
           </Description>
       </Container>
    )
}

export default Project

const Container = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    height: 40vh;
    padding: 30px;
    border-radius: 25px;
    background-color: white;
    align-items: center;
    box-shadow: 0 0 5px;

    :hover {
        width: 82%;
        height: 42vh;
        background-color: #dfe6f2;
        box-shadow: 0 0 5px;
    }
`
const ImageContainer = styled.div`
    flex: .40;
    height: 35vh;
    border-radius: 10px;
    
    img {
        display : inline-block;
        height: 100%;
        border-radius: 10px;
    }
`

const Description = styled.div`
    align-self: top;
    flex: .20;
    padding: 10px;
    a {
        color: black;
    }
    a:focus {
        color: black;
    }
`

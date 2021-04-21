import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Links = ({link, title}) => {

    return (    
    <LinkContainer>
        <Link to={link}>
            {title}
        </Link>
    </LinkContainer>)
}


export default Links

const LinkContainer = styled.div `
    a {
        color: white;
        text-decoration: none;
    }
    a:hover {
        color: white;
        text-decoration: none;
        background-color: rgb(23,51,47);
        width: 120px;
    }
    a:focus {
        color: white;
        text-decoration: none;
    }
`
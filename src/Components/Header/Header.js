import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
function header() {
    return (

        // The Links for th header
        <Constructor>
            <LinkFormtare>
                <Link to="/">
                    Home
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="/Resume">
                    Resume                    
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="/Notes">
                    Notes
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="DataStructures">
                    Data Structures
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="Algorithms">
                    Algorithms
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="Homework">
                    Homework
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="Projects">
                    Projects
                </Link>
            </LinkFormtare>
        </Constructor>
    )
}

export default header
const Constructor = styled.div`
    background-color: #17332f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    height: 50px;
`
const LinkFormtare = styled.div`
    padding: 20px;
    a {
        color: white;
        text-decoration: none;
    }
`


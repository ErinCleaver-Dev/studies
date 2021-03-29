import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
function header() {
    return (
        <Constructor>
            <HomePage>
                <Link to="/">
                    Home
                </Link>
                <Link to="">
                    
                </Link>
            </HomePage>
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
const HomePage = styled.div`
    a {
        color: white;
        text-decoration: none;
    }
`


import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { NavDropdown} from 'react-bootstrap'

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
                <NavDropdown  title="Notes" variant='custom' id="nav-dropdown" className="notes" >
                    <div>
                    <NavDropdown.Item value="PythonNotes"  className="notes-dropdown" >
                        <Link to="/PythonNotes">
                            Python Notes
                        </Link>
                    </NavDropdown.Item >
                    </div>
                </NavDropdown >
            </LinkFormtare>
            <LinkFormtare>
                <Link to="/DataStructures">
                    Data Structures
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="/Algorithms">
                    Algorithms
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="/Homework">
                    Homework
                </Link>
            </LinkFormtare>
            <LinkFormtare>
                <Link to="/AlgorithmsProjects">
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
    width: 100%;
    height: 70px;
`
const LinkFormtare = styled.div`
    padding: 20px;
    a {
        color: white;
        text-decoration: none;
    }
    .notes {
        color: white;
        background-color: #17332f;
    }
    .notes-dropdown {
        color: white;
        background-color: #17332f;
        border: 4px solid black;
        padding: 5px;
    }
   
`


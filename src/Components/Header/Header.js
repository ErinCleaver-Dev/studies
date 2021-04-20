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
                    <div>
                    <NavDropdown title="Nodes js" variant='custom' id="nav-dropdown" className="notes changeSize">
                        <NavDropdown.Item value="IntroductionToNodeJs"  className="notes-dropdown" >
                        <Link to="/IntroductionToNodeJs">
                            Introduction to Node js
                        </Link>
                        </NavDropdown.Item >
                    </NavDropdown>
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
                <NavDropdown  title="Homework" variant='custom' id="nav-dropdown" className="notes" alignRight>
                    <div>
                    <NavDropdown.Item value="PythonHomework"  className="notes-dropdown" >
                        <Link to="/PythonHomework">
                            Python Homework
                        </Link>
                    </NavDropdown.Item >
                    </div>
                </NavDropdown >
                

            </LinkFormtare>
            <LinkFormtare>
                <Link to="/Projects">
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
        border: 4px solid #121c1f;
        font-size: 25px;
    }

    .changeSize {
        font-size: 25px;
    }
   
`


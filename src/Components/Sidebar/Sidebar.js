import React from 'react'
import styled from 'styled-components';
import Links from './Links'


function Sidebar({linkList}) {
    return (
        <Container>
            {linkList.Links.map((link, title) => 
              <Links link={link} 
              title={title}/>
            )}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    flex: .2;
    background-color: #377b71;
`


import React from 'react';
import styled from 'styled-components';

const Code = ({example}) => {
    return (
        <ExampleSection>
            <SubTitle key={example.id}>{example.Number}</SubTitle>
            <Row>
                <CodeFormated>{example.Code.map((code) => (
                    <div>
                        {code.Line} <br/>
                    </div>
                ))}</CodeFormated>
                <CodeFormated></CodeFormated>
                <a href={example.Url}><Image src={example.Image}/></a>
            </Row>
        </ExampleSection>
    )
}


export default Code

const ExampleSection = styled.div`
`

const SubTitle = styled.div`
    border: 2px solid #17332f;
    padding-left: 20px;
`

const Row = styled.div`
    display: flex;
`

const Image = styled.img`
    border-left: 2px solid #17332f;
    padding: 20px;
    height: 300px;
    flex: .4;
`

const CodeFormated = styled.div`
    padding-left: 20px;
    flex: .8
`
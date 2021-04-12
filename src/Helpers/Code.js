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
                        <SubLine>
                        {
                            code.SubLine1.map((subline) =>(
                                
                                <li>{subline.Line}</li>
                                
                            ))
                        }
                        </SubLine>
                    </div>
                ))}</CodeFormated>
                <ImageFormated>
                    <a href={example.Url}><Image src={example.Image}/></a>
                </ImageFormated>
            </Row>
        </ExampleSection>
    )
}


export default Code

const ExampleSection = styled.div`
`

const SubTitle = styled.div`
    font-weight: bold;
    border-bottom: 2px solid #17332f;
    padding-left: 20px;
`

const Row = styled.div`
    display: flex;
`

const Image = styled.img`
    padding: 20px;
    height: 400px;
`

const CodeFormated = styled.div`
    padding-left: 20px;
    flex: .8
`
const SubLine = styled.ul`
    li {
        list-style-type: none;
    }
`

const ImageFormated = styled.div`
    border-left: 2px solid #17332f;
    flex: .35;
`

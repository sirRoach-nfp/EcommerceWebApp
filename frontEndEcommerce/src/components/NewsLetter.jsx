import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';

import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title= styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom:20px;

    
    ${mobile({
        textAlign: "center",
    })}
    
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    
    ${mobile({
        width: "80%"
    })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    margin-left: 5px;
    outline: none;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
`






export default function NewsLetter(){

    return(
        <Container>

            <Title>NewsLetter</Title>

            <Description>Get timely updates from your favorite products.</Description>

            <InputContainer>
                <Input placeholder="Your email"/>

                <Button>
                    <SendIcon/>
                </Button>
            
            </InputContainer>


        </Container>
    )
}
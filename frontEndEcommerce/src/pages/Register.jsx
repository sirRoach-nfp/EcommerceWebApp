import styled from "styled-components";
import { mobile,mobileM,tablet,desktopS,desktopL } from "../responsive"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import HomeIcon from '@mui/icons-material/Home';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: teal;
`


const Wrapper = styled.div`
    width: 40% ;
    padding: 20px;
    background-color: white;
    //border: 1px solid red;
    ${mobile({
        width: "80%"
    })}

    ${mobileM({
        width: "80%"
    })}

    ${tablet({
        width: "80%"
    })}


    ${desktopS({
        width: "70%"
    })}
`


const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`


const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement= styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    color: white;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin-top: 20px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

`

export default function Register(){
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({})

    const handleInputs = (e) => {
        setInputs(prev => {
            return{
                ...prev, [e.target.name] : e.target.value
            }
        })
    }

    const handleRegister = async (e) =>  {
        e.preventDefault();

        try{
            const res = await publicRequest.post("/auth/register",inputs)

            console.log(res.data)
        }catch(err){ console.log(err)}
    }

    //console.log(inputs)

    const handleNavigate = () => {
        navigate("/login")
    }

    const navigateHome = () => {
        navigate("/")
    }





    return(
        <Container>
            <HomeIcon style={{color:"white", fontSize:"30px",marginBottom:"10px", cursor:"pointer"}} onClick={navigateHome}/>
            <Wrapper>

                <Title>CREATE AN ACCOUNT</Title>

                <Form>
                    
                    <Input placeholder="name" name="name" onChange={(e) => handleInputs(e)}/>
                    <Input placeholder="last name" name="lastname" onChange={(e) => handleInputs(e)}/>
                    <Input placeholder="username" name="username" onChange={(e) => handleInputs(e)}/>
                    <Input placeholder="email" name="email" onChange={(e) => handleInputs(e)}/>
                    <Input placeholder="password" name="password" onChange={(e) => handleInputs(e)}/>
                    <Input placeholder="confirm password"/>

                    <Agreement> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>

                    <Button onClick={handleRegister}>Create</Button>
                  
             
                </Form>
                <Link onClick={handleNavigate}>Already have an account?</Link>
            </Wrapper>
        </Container>
    )
}
import styled from "styled-components";
import { mobile,mobileM,tablet,desktopS,desktopL } from "../responsive"
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
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
    width: 25% ;
    padding: 20px;
    background-color: white;
   // border: 1px solid red;
   ${mobile({
    width: "80%",
  })}
  ${mobileM({
    width: "70%",
  })}
  ${tablet({
    width: "80%",
  
  })}
  ${desktopS({
    width: "40%",
  })}


`


const Form = styled.form`
    display: flex;
    flex-direction: column;
`


const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`


const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
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


    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

`
const Error = styled.span`
    color: red;

`
export default function Login(){
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.currentUser?.accessToken || false);
    //const token = useSelector((state) => state.user.currentUser.accessToken)
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch()
    const {isFetching,error} = useSelector((state)=> state.user)

    const handleLogin = (e)=>{
        e.preventDefault();
        login(dispatch,{username,password})
        
   
    }

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate("/register")
    }


    const navigateHome = () => {
        navigate("/")
    }

    return(
        <Container>

                <HomeIcon style={{color:"white", fontSize:"30px",marginBottom:"10px", cursor:"pointer"}} onClick={navigateHome}/>
        
            <Wrapper>

                <Title>SIGN IN</Title>

                <Form>
                    

        
                    <Input placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
               
                    <Input placeholder="password" onChange={(e)=> setPassword(e.target.value)}/> 


                    <Button onClick={handleLogin} disabled={isFetching}>Login</Button>
                    {error && <Error>Something went Wrong</Error>}


                    <Link>FORGOT PASSWORD?</Link>
                    <Link onClick={handleNavigate}>CREATE A NEW ACCOUNT</Link>
             
                </Form>
            </Wrapper>
        </Container>
    )
}
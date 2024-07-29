import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom'
import { commitLogout } from '../redux/apiCalls';
import axios from 'axios';
//import { search } from '../../../EcommerceAPI/routes/product';
const NavContainer = styled.div`
 height: 60px;
    ${mobile()}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({
        display: "none"
    })}


`
const SearchContainer = styled.div`
border: 1px  black;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`

const Input = styled.input`
    border: none;
    ${mobile({
        width: "50px"
    })}
`


const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    ${mobile({
        fontSize: "24px"
    })}

`



const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({
       flex:2,
       justifyContent: "center"
    })}
`

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;

    ${mobile({
       fontSize: "12px",
       marginLeft: "10px"
    })}

`



//Handlers
const handleSearch = () => {
    
    try{

    }catch(err){
        console.log(err)
    }
}

export default function Navbar(){
    const quantity = useSelector(state=>state.cart?.quantity || 0);
    const userName = useSelector(state=>state.user.currentUser?.username || false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue,setSearch] = useState("");
    console.log(quantity)


    const handleLogout = ()=>{
        commitLogout(dispatch);

    }


    
//Handlers
    const handleSearch = () => {
        let verifiedSearchVal = searchValue || "all";


    
        navigate(`/products/search/${verifiedSearchVal}`);
    }

      


    const navigateHome = () =>{
        useNavigate("/")
    }
    
    return(

        <NavContainer>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
                        <SearchIcon 
                            style={{color: "gray", fontSize:16, cursor: searchValue ? "pointer" : "not-allowed"}} 
                            onClick={searchValue ? handleSearch : null}
                        />
        
                    </SearchContainer>
                </Left>


                <Center>

                    <Link to="/" style={{textDecoration:"none", color:"black"}}>

                        <Logo>TEST.</Logo>
                    </Link>
                    
                </Center>



                <Right> 
                        {!userName && <MenuItem>REGISTER</MenuItem> }
                        
                        <MenuItem>{userName ? userName : "SIGNIN"}</MenuItem>

                        {userName && <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>}


                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={quantity} color='primary'>
                                    <ShoppingCartOutlinedIcon/>
                                </Badge>
                            </MenuItem>
                        </Link>



                </Right>
            </Wrapper>
        </NavContainer>
    )
}
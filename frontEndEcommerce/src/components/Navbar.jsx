import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavContainer = styled.div`
 height: 60px;

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
`


const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;

`



const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;

`


export default function Navbar(){
    return(

        <NavContainer>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>


                <Center>
                    <Logo>TEST.</Logo>
                </Center>



                <Right>
                        <MenuItem>REGISTER</MenuItem>
                        <MenuItem>SIGN IN</MenuItem>

                        <MenuItem>
                            <Badge badgeContent={4} color='primary'>
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </MenuItem>

                </Right>
            </Wrapper>
        </NavContainer>
    )
}
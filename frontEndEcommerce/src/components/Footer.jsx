import styled from "styled-components"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { mobile,mobileM,tablet,desktopS } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({
        flexDirection: "column"
    })}

`

//Left
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`

const Description = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


//Center

const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({
        display: "none"
    })}

    ${mobileM({
        display: "none"
    })}
    ${tablet({
        display: "none"
    })}
    ${desktopS({
        display: "none"
    })}
`   

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`



//Right
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        backgroundColor: "#fff8f8"
    })}
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`




export default function Footer(){

    return(
        
       <Container>
            <Left>
                <Logo>Test</Logo>

                <Description>
                    Our eCommerce web app for apparels offers a seamless and intuitive shopping experience. Featuring a sleek design and user-friendly interface, customers can effortlessly browse, search, and purchase the latest fashion trends. With secure payment options, real-time order tracking, and personalized recommendations, our platform ensures satisfaction at every step. Robust backend support guarantees quick load times and reliable service, making online shopping for clothes convenient and enjoyable. Find your perfect style with our extensive collection of apparel.
                </Description>

                <SocialContainer>

                    <SocialIcon color="3B5999">
                        <FacebookIcon/>
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <InstagramIcon/>
                    </SocialIcon>

                    <SocialIcon color="55ACEE">
                        <TwitterIcon/>
                    </SocialIcon>


                </SocialContainer>


            </Left>


            <Center>
                <Title>
                    Useful Links
                </Title>

                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>




            </Center>



            <Right>
                <Title>Contact</Title>

                <ContactItem>
                    <MapIcon style={{marginRight: "10px"}}/> 420 Bikini Bottom, Pacific Ocean 
                </ContactItem>

                <ContactItem>
                    <PhoneIcon style={{marginRight: "10px"}}/> +64 9322 12932
                </ContactItem>

                <ContactItem>
                    <EmailOutlinedIcon style={{marginRight: "10px"}}/> contact@MantaRay.dev
                </ContactItem>


            </Right>
       </Container>
    )
}
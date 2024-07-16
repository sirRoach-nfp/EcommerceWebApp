import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlined from "@mui/icons-material/AddOutlined";

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;

`


const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`



const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    
    
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 300;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`



const Product = styled.div`
    display: flex;
    justify-content: space-between;
`


const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;

`

const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color:  ${props=>props.color};

`
const ProductSize = styled.div`

`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`



const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const Summaryitem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    font-weight:  ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "25px"};;


`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    background-color: black;
    padding: 10px;
    color: white;
    font-weight: 600;
`

export default function Cart(){

    return(
        <Container>
            <Navbar/>
            <Announcement/>

            <Wrapper>

                <Title>YOUR CART</Title>
                
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>

                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>

                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>

                        <Info>

                            <Product>

                                <ProductDetail>

                                    <Image src="https://pagesix.com/wp-content/uploads/sites/3/2022/01/steve-madden.png"/>
                                
                                    <Details>

                                        <ProductName><b>Product:</b> </ProductName>
                                        <ProductId><b>ID:</b> 09110031</ProductId>
                                        <ProductColor color="black"/>
                                        <ProductSize><b>Size:</b> 37.5</ProductSize>

                                    </Details>

                                </ProductDetail>

                                <PriceDetail>

                                    <ProductAmountContainer>

                                            <AddOutlinedIcon/>
                                            <ProductAmount>2</ProductAmount>
                                            <RemoveOutlinedIcon/>

                                    </ProductAmountContainer>

                                    <ProductPrice>$ 30</ProductPrice>
                                    
                                </PriceDetail>

                            </Product>


                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                                <Summaryitem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                                </Summaryitem>

                                <Summaryitem>
                                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                                </Summaryitem>

                                <Summaryitem>
                                    <SummaryItemText>Shipping Discount</SummaryItemText>
                                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                                </Summaryitem>
                                
                                <Summaryitem type="total">
                                    <SummaryItemText >Total</SummaryItemText>
                                    <SummaryItemPrice>$ 80</SummaryItemPrice>
                                </Summaryitem>

                            <Button>CHECKOUT NOW</Button>


                        </Summary>


                </Bottom>

            </Wrapper>


            <Footer/>
        </Container>
    )

}

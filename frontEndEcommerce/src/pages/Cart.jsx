import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlined from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../requestMethod";
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from "../redux/cartRedux"
import { removeItemFromCart } from "../redux/apiCalls";
import useWindowWidth from "../useWindowWidth";
import { mobile,mobileM,tablet } from "../responsive";
const KEY = import.meta.env.VITE_STRIPE;
console.log(KEY)
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
    ${mobile({
        padding: "0",
        alignItems:"center",
    })}

    ${mobileM({
        padding: "0",
        alignItems:"center",
    })}
    
    
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 300;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

    ${mobile({
        display: "none",
    })}

    ${mobileM({
        display: "none",
    })}
`

const TopTexts = styled.div`
    ${mobile({
        marginTop:"5px",
        width:"100%",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
    })}

    ${mobileM({
        marginTop:"5px",
        width:"100%",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
    })}

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
      
        flexDirection:"column",
    })}

    ${mobileM({
      
        flexDirection:"column",
    })}

    ${tablet({
       
        flexDirection:"column",
    })}
`

const Info = styled.div`
    flex: 3;

    ${mobile({
       
    })}
    ${mobileM({
       
    })}
`



const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        //flexDirection: "column",
    })}
`


const ProductDetail = styled.div`
    flex: 2;
    display: flex;

    ${mobile({
    
        flexDirection:"column",
    })}

    
    ${mobileM({
      
        flexDirection:"column",
    })}
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
    ${mobile({
    
        alignItems:"center",
        justifyContent:"center"
    })}

    ${mobileM({

        alignItems:"center",
        justifyContent:"center"
    })}
`


const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({
        marginBottom:"20px",
       // marginRight:"20px",
    })}

    ${mobileM({
        marginBottom:"20px",
       // marginRight:"20px",
    })}
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
    cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.isDisabled ? 0.5 : 1};

`


const removeDiv = styled.div`
    flex: 1;
    border: 1px solid red;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`



export default function Cart(){
    const cart = useSelector(state=>state.cart)
    const user = useSelector(state=> state.user)
    const dispatch = useDispatch();

    const windowWidth = useWindowWidth();
    const isMobile  = windowWidth < 600;


    const navigate = useNavigate()
    const [stripeToken,setStripeToken] = useState(null)

    const onToken = (token)=> {
        setStripeToken(token);


    }

    useEffect(()=> {
        const makeRequest = async ()=>{
            try{
                const res = await userRequest.post(`/checkout/payment`,{
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                  
                });
                
           

                const order = {
                    userId: user.currentUser._id,
                    products: cart.products.map(item=>({
                        productId: item._id,
                        quantity: item.quantity,
                    })),
                    amount:cart.total,
                    address:"billingAddress",
                };


                 await userRequest.post("/order/createOrder",order);

                 navigate("/success",{data:res.data})

            }catch(err){
                console.log(err)
            }
        }
       stripeToken && makeRequest();
    }, [stripeToken,cart.total,navigate])

    console.log(stripeToken)


    const handleRemove = (id) => {
        /*
        dispatch(
            deleteProduct(id)
        )*/

            removeItemFromCart(dispatch,user.currentUser._id,id)
    }

   
    return(
        <Container>
            <Navbar/>
            <Announcement/>

            <Wrapper>

                <Title>YOUR CART</Title>
                
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>

                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>

                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>

                        <Info>





                           {cart.products.map(product=> ( <Product>

                                <ProductDetail>

                                    <Image src={product.img}/>
                                
                                    <Details>

                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product.productId}</ProductId>
                                        <ProductColor color={product.color}/>
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>

                                    </Details>

                                </ProductDetail>

                                <PriceDetail>

                                    <ProductAmountContainer>

                                            <AddOutlinedIcon/>
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <RemoveOutlinedIcon/>

                                    </ProductAmountContainer>

                                    <ProductPrice>$ {product.price*product.quantity}</ProductPrice>


                                    <div className="removeDiv" style={{
                                        
                                    
                                        display: "flex",
                                        alignItems:"center",
                                        justifyContent: "center",
                                        marginTop:"20px"


                                    }}>
                                        <DeleteOutlineOutlinedIcon onClick={() => handleRemove(product._id)} style={{color:"red",fontSize:"35px",cursor:"pointer"}}/>
                                    </div>
                                    
                                </PriceDetail>



         

                            </Product>

                        ))}




                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                                <Summaryitem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                                </Summaryitem>

                                <Summaryitem>
                                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                                    <SummaryItemPrice>$ NaN</SummaryItemPrice>
                                </Summaryitem>

                                <Summaryitem>
                                    <SummaryItemText>Shipping Discount</SummaryItemText>
                                    <SummaryItemPrice>$00</SummaryItemPrice>
                                </Summaryitem>
                                
                                <Summaryitem type="total">
                                    <SummaryItemText >Total</SummaryItemText>
                                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                                </Summaryitem>


                            {cart.quantity <= 0 ? null : (
                                                        <StripeCheckout
                                                            name="Manta Shop"
                                                            billingAddress
                                                            shippingAddress
                                                            description={`Your total is $${cart.total}`}
                                                            amount={cart.total * 100}
                                                            token={onToken}
                                                            stripeKey={KEY}
                            
                                                        >
                                                            <Button isDisabled={cart.quantity < 0} disabled={cart.quantity < 0}>CHECKOUT NOW</Button>
                            
                                                        </StripeCheckout>
                            )}



                        </Summary>


                </Bottom>

            </Wrapper>


            <Footer/>
        </Container>
    )

}

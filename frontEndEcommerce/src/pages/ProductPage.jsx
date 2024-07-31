import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useLocation,useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import { publicRequest } from "../requestMethod"
import { addProduct } from "../redux/cartRedux"
import { useDispatch,useSelector } from "react-redux"
import { addItemToCart } from "../redux/apiCalls"
import { mobile, mobileM,tablet } from '../responsive';
const Container = styled.div`
    
`


const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    //border: 1px solid red;
    margin-top: 20px;

    ${mobile({
        flexDirection:"column",
    })}

    ${mobileM({
        flexDirection:"column",
    })}
`



const ImageContainer = styled.div`
    flex: 1;
`


const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    //border: 1px solid red ;
    ${mobileM({
        height: "60vh",
    })}
`


const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 10px;
    border: "1px solid red";
`


const Title = styled.h1`
    font-weight: 200;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
    
`


const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    

`






const Filter = styled.div`
    display: flex;
    align-items: center;
    
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;justify-content: space-between;
    
    ${mobile({
        width:"70%",
    })}
    ${mobileM({
        width:"70%",
    })}

    ${tablet({
        width:"70%",
    })}

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor:pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4 ;
    }
`



export default function ProductPage(){
    const navigate = useNavigate();

    const uid = useSelector((state)=> state.user.currentUser?._id || false)
   

    const location = useLocation();
    const id = location.pathname.split("/")[2]

    const [product,setProduct] = useState({})


   const [color,setColor] = useState("");
   const [size,setSize] = useState("");
   const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch();

    useEffect(()=>{

        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/product/fetchProduct/specific/"+id);
                setProduct(res.data)
                console.log(res.data)
                
            }
            catch(err){
                console.log(err)
            }
        }
        getProduct()

    },[id])

    const handleQuantity = (counter) =>{
        if(counter === "decrease" ){
            quantity > 1 && setQuantity(quantity - 1)
        }
        else{
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        const item = {
            ...product,quantity,color,size
        }

        const userId = uid;
        /*
        dispatch(
            addProduct({
                ...product,quantity,color,size
            })
        )*/

            addItemToCart(dispatch,userId,item)

    }

    const handleRedirect = () =>{
        navigate("/login")
    }

    return(

        <Container>
            <Announcement/>
            <Navbar/>

            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>

                <InfoContainer>
                    <Title>{product.title}</Title>

                    <Desc>{product.description}
                    </Desc>

                    <Price>$ {product.price}</Price>

                    <FilterContainer>

                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            
                            {product.color?.map(c=>(
                                <FilterColor color = {c} key={c} onClick={()=> setColor(c)}/>
                            ))}
                        </Filter>


                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=> setSize(e.target.value)}>
                                
                                {product.size?.map(s=>(
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}

                            </FilterSize>
                        </Filter>



                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlinedIcon onClick={()=> handleQuantity("decrease")}/>
                            <Amount>{quantity}</Amount>
                            <AddOutlinedIcon onClick={()=> handleQuantity("increase")}/>
                        </AmountContainer>

                        <Button onClick={uid ? handleClick : handleRedirect }>Add to cart</Button>
                    </AddContainer>

                </InfoContainer>



            </Wrapper>


            <NewsLetter/>
            <Footer/>


        </Container>
    )
}
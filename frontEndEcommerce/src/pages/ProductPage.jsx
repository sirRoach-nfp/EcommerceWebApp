import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
const Container = styled.div`
    
`


const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`



const ImageContainer = styled.div`
    flex: 1;
`


const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`


const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
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

    return(

        <Container>
            <Announcement/>
            <Navbar/>

            <Wrapper>
                <ImageContainer>
                    <Image src="https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/KU10019-003_TF.jpg"/>
                </ImageContainer>

                <InfoContainer>
                    <Title>test test</Title>

                    <Desc>Our eCommerce web app for apparels offers a seamless and intuitive shopping experience. Featuring a sleek design and user-friendly interface, customers can effortlessly browse, search, and purchase the latest fashion trends. With secure payment options, real-time order tracking, and personalized recommendations, our platform ensures satisfaction at every step. Robust backend support guarantees quick load times and reliable service, making online shopping for clothes convenient and enjoyable. Find your perfect style with our extensive collection of apparel.
                    </Desc>

                    <Price>$ 20</Price>

                    <FilterContainer>

                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color = "black"/>
                            <FilterColor color = "darkblue"/>
                            <FilterColor color = "gray"/>
                        </Filter>


                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>

                            </FilterSize>
                        </Filter>



                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlinedIcon/>
                            <Amount>1</Amount>
                            <AddOutlinedIcon/>
                        </AmountContainer>

                        <Button>Add to cart</Button>
                    </AddContainer>

                </InfoContainer>



            </Wrapper>


            <NewsLetter/>
            <Footer/>


        </Container>
    )
}
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

const Container = styled.div`
    
`

const Title = styled.h1`
margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`

const Filter= styled.div`
    
`

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
    margin-left: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
    
`

export default function ProductList(){

    return(
        <Container>
            
            <Navbar/>
            <Announcement/>

            <Title> Dresses </Title>

            <FilterContainer>
                <Filter>
                    
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                    </Select>

                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>

                
                </Filter>
            
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                  
                    </Select>
                    
                </Filter>

            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
            
            

        </Container>
    )
}
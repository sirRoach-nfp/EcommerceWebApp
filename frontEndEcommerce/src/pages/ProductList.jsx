import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { useLocation,useParams } from "react-router-dom"
import { mobile,mobileM } from '../responsive';
import { useState } from "react"

const Container = styled.div`
    
`

const Title = styled.h1`
margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobileM({

    })}


    
`

const Filter= styled.div`

${mobileM({
    
    })}
    
`

const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
    margin-left: 20px;

    ${mobile({
    
        marginRight:"0px",
        marginLeft:"0px",
    })}
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    
    ${mobileM({
 
        marginRight:"0px",
        marginLeft:"0px",
    })}


    ${mobile({
    
        marginRight:"0px",
        marginLeft:"0px",
        padding:"2px"
    })}
`

const Option = styled.option`
    
`

export default function ProductList(){

    const location = useLocation();

    //pointer
    const pointer = location.pathname.split("/")[2];
    console.log(pointer);


    const cat = location.pathname.split("/")[3]

    const {searchValue} = useParams();

    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters = (e)=> {
        const value = e.target.value;
        setFilters(
            {   
                ...filters,
                [e.target.name] : value,
            }
        )
    }   

    console.log(filters)
    return(
        <Container>
            
            <Navbar/>
            <Announcement/>

            <Title> {cat} </Title>

            <FilterContainer>
                <Filter>
                    
                    <FilterText>Filter Products:</FilterText>


                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>

                
                </Filter>
            
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                  
                    </Select>
                    
                </Filter>

            </FilterContainer>
                <Products cat={cat} filters={filters} sort= {sort} searchValue={searchValue} pointer={pointer}/>
            <NewsLetter/>
            <Footer/>
            
            

        </Container>
    )
}
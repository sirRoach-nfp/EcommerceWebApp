
import styled from "styled-components"
import ProductCard from "./ProductCard"
import { popularProducts } from "../data"


const Container = styled.div`
    padding: 20px;
    display: flex;
`



export default function Products(){


    return(
        <Container>
            {popularProducts.map(item => (
                <ProductCard item={item} key={item.id}/>
            ))}
        </Container>
    )
}
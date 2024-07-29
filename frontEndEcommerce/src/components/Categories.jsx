

import styled from "styled-components"
import { categories} from "../data"

import CategoryItem from "./CategoryItem"

import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
   // border: 1px solid red;

    ${mobile({
        padding: "0px",
        flexDirection: "column"
    })}
`


export default function Categories(){


    return(

        <Container>
              {categories.map(item=> (

                    <CategoryItem item={item}/>
                  
                    
              )) }
        </Container>
    )


}
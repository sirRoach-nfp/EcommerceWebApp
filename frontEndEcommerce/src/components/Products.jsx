
import styled from "styled-components"
import ProductCard from "./ProductCard"
import { popularProducts } from "../data"
import { useState,useEffect } from "react"
import axios from "axios"


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`



export default function Products({cat,filters,sort}){

    const [products,setProduct] = useState([]);
    const [filteredProducts,setFilteredProduct] = useState([]);

    useEffect(()=> {
        const getProducts = async ()=>{
            try{
                const res = await axios.get(cat ? `http://localhost:5000/api/product/fetchProducts?category=${cat}`: `http://localhost:5000/api/product/fetchProducts`)
                console.log(res.data)
                setProduct(res.data)
            }catch(err){
                console.log(err)
            }
        }

        getProducts();
    },[])


    useEffect(()=> {
        cat && setFilteredProduct(
            products.filter(item=> Object.entries(filters).every(([key,value])=> 
                item[key].includes(value)
            
            ))
        )


    },[cat,filters,products])

    useEffect(()=> {
        if(sort === "newest"){
            setFilteredProduct(prev=>
            [...prev].sort((a,b)=>a.createdAt - b.createdAt)
            )

        }else if (sort === "asc"){
         
                setFilteredProduct(prev=>
                [...prev].sort((a,b)=>a.price - b.price))
      
        } else{
            setFilteredProduct(prev=>
                [...prev].sort((a,b)=>b.price - a.price))
        }
    },[sort])


    return(
        <Container>
            {cat ? filteredProducts.map(item => (
                <ProductCard item={item} key={item.id}/>
            )) : products.slice(0,8).map(item => (
                <ProductCard item={item} key={item.id}/>
            ))}
        </Container>
    )
}

import styled from "styled-components"
import ProductCard from "./ProductCard"
import { popularProducts } from "../data"
import { useState,useEffect } from "react"
import axios from "axios"
import { mobile, mobileM } from '../responsive';
import { publicRequest } from "../requestMethod"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;

    ${mobile({
    display:"flex",
    justifyContent: "center",
    })}

    ${mobileM({
        display:"flex",
        justifyContent: "center",
       // border:"1px solid red"
    })}
`



export default function Products({cat,filters,sort,searchValue,pointer}){

    const [products,setProduct] = useState([]);
    const [filteredProducts,setFilteredProduct] = useState([]);


    if(searchValue === ""){
        
    }

    console.log(pointer)

    const getProducts = async ()=>{
        try{
            const res = await axios.get(cat ? `${publicRequest}/product/fetchProducts?category=${cat}`: `${publicRequest}/product/fetchProducts`)
            console.log(res.data)
            setProduct(res.data)
        }catch(err){
            console.log(err)
        }
    }


    const reFetch = async ()=>{
        try{
            if(searchValue === "all"){
                const res = await axios.get(`${publicRequest}/product/fetchProducts`)
                setProduct(res.data)

            }
            const res = await axios.get(`${publicRequest}/product/fetchProduct/${searchValue}`)
            setProduct(res.data)
        }catch(err){
            console.log(err)

        }
    }



    useEffect(()=>{

            if (pointer === "category") {
                getProducts();
            } else if (pointer === "search") {
                reFetch();
            }
      
    }, [pointer, searchValue, cat]);
    



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

            {products <= 0 ? <h1 >No Result for "{searchValue}"</h1> : (
            cat ? filteredProducts.map(item => (
                <ProductCard item={item} key={item.id}/>
            )) : products.slice(0,8).map(item => (
                <ProductCard item={item} key={item.id}/>
            )))}

            


        </Container>
    )
}
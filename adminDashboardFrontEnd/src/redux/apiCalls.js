import { loginFailure, loginStart,loginSuccess } from "./userSlice"
import {publicRequest,userRequest} from "../requestMethods"
import { getProductFailure, getProductStart, getProductSuccess,deleteProductStart,deleteProductSuccess,deleteProductFailure,updateProductFailure,updateProductStart,updateProductSuccess,addProductFailure,addProductStart,addProductSuccess } from "./productRedux";


export const login = async (dispatch,user)=> {
    dispatch(loginStart());

    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}


export const getProducts = async (dispatch)=> {
    dispatch(getProductStart());

    try{
        const res = await publicRequest.get("/product/fetchProducts")
        dispatch(getProductSuccess(res.data))
    }catch(err){
        dispatch(getProductFailure())
    }
}


export const deleteProduct = async (id,dispatch)=> {
    dispatch(deleteProductStart());

    try{
        const res = await userRequest.delete(`/product/deleteProduct/${id}`)
        dispatch(deleteProductSuccess(id))
    }catch(err){
        dispatch(deleteProductFailure())
    }
}
 



export const updateProduct = async (id,product,dispatch)=> {
    dispatch(updateProductStart());

    try{
        //const res = await userRequest.delete(`/product/deleteProduct/${id}`)
        dispatch(updateProductSuccess({id,product}))
    }catch(err){
        dispatch(updateProductFailure())
    }
}
 


export const addProduct = async (product,dispatch)=> {
    dispatch(addProductStart());

    try{
        const res = await userRequest.post(`/product/addProduct`,product)
        dispatch(addProductSuccess(res.data))
    }catch(err){
        dispatch(addProductFailure())
    }
}
 
import { loginFailure, loginStart,loginSuccess,logout } from "./userSlice"
import {publicRequest,userRequest} from "../requestMethod"
import { fetchUserCart,deleteProduct,resetCart,addProduct } from "./cartRedux";


export const getUserCart = async (dispatch,userId)=>{

    try{
        const res = await userRequest.get(`/cart/fetchCart/${userId}`);
        dispatch(fetchUserCart(res.data))


    }
    catch(err){
        console.log(err)
    }

}


export const addItemToCart = async (dispatch,userId,item) => {
    
    try{
        const res = await publicRequest.post(`/cart/updateCart/${userId}`, {...item,userId})
        console.log(res.data)
        dispatch(addProduct(item))
    }catch(error){
        console.log(error)
    }
}

export const removeItemFromCart = async (dispatch,userId,productId)=>{
    try{
        const res = await publicRequest.delete(`/cart/remove/${userId}/${productId}`)
        console.log(res.data)
        dispatch(deleteProduct(productId))
    }catch(error){
        console.log(error)
    }
}
export const login = async (dispatch,user)=> {
    dispatch(loginStart());

    try{
        const res = await publicRequest.post("/auth/login",user)
        
       
        dispatch(loginSuccess(res.data))
        //getUserCart(dispatch,res.data._id)
        
    }catch(err){
        dispatch(loginFailure())
    }
}

export const commitLogout = (dispatch) => {
    dispatch(resetCart());
    dispatch(logout());

}



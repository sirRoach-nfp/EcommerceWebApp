import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity:0,
        total:0,
    },
    reducers:{

        fetchUserCart: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.products.reduce((acc, item) => acc + item.quantity, 0);
            state.total = action.payload.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        addProduct:(state,action)=>{
            state.quantity += action.payload.quantity;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct:(state,action)=>{
            const index = state.products.findIndex(item=> item._id === action.payload);
            if(index !== -1){

                const product = state.products[index];
                //state.quantity -= state.products[index].quantity;
                state.quantity -= product.quantity;
                
                state.total -= state.products[index].price * state.products[index].quantity;
                state.products.splice(index,1);
            }
    
        },
        resetCart:(state)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
          

        }
    }
})




export const {addProduct,deleteProduct,fetchUserCart,resetCart} = cartSlice.actions
export default cartSlice.reducer;
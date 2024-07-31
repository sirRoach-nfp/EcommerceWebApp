const router = require("express").Router();

const Cart = require("../models/Cart");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");





//CREATE PRODUCT

router.post("/createCart", verifyToken ,async (req,res)=>{

    const newCart = new Cart(req.body)


    try{
        const savedCart = await newCart.save();

        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT 
/*
router.put("/updateCart/:id" ,async (req,res)=>{

    try{
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,

            {$set: req.body},

            {new: true}
        
        )

        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err)
    }
    

})
*/
router.post("/updateCart/:id" ,async (req,res)=>{
    console.log(req.body)

    const productId = req.body._id
    const quantity = req.body.quantity
    const img = req.body.img
    const price = req.body.price
    const title = req.body.title

    try{
       
        const cart = await Cart.findOne({userId: req.params.id})
        
        const updatedCart = await Cart.findByIdAndUpdate(
            cart._id,
            {
                $push: {
                  products: {
                    productId: productId,
                    quantity: quantity,
                    img:img,
                    title:title,
                    price:price,
                  },
                },
              },
              { new: true }
        );
        
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err)
    }
    

})

//DELETE 
router.delete("/deleteCart/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted")
    }catch(err){
        res.status(200).json(err);
    }
})


//DELETE product from cart 
router.delete("/remove/:uid/:puid", async (req,res)=>{
    const prodId = req.params.puid;
    const uid = req.params.uid
    try{
        const cart = await Cart.findOne({userId: uid})

        const updatedCart = await Cart.findByIdAndUpdate(cart._id,{
            $pull: { products: { _id: prodId } },
          },
          { new: true });

        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err);
    }
})


//GET USER CART 

router.get("/fetchCart/:id", verifyTokenAndAuthorization, async (req,res)=>{
    console.log(req.headers.token)
   

    try{
        const cart = await Cart.findOne({userId: req.params.id})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})




//GET ALL
router.get("/",verifyTokenAndAdmin, async(req,res)=>{



    try{
       const carts = await Cart.find()
       res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router
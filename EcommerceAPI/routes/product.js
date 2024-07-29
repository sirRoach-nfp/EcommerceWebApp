const router = require("express").Router();
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");





//CREATE PRODUCT

router.post("/addProduct", verifyTokenAndAdmin ,async (req,res)=>{

    const newProduct = new Product(req.body)
    console.log(newProduct)


    try{
        const savedProduct = await newProduct.save();

        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT 

router.put("/update/:id", verifyTokenAndAdmin ,async (req,res)=>{

    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,

            {$set: req.body},

            {new: true}
        
        )

        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err)
    }
    

})


//DELETE 
router.delete("/deleteProduct/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted")
    }catch(err){
        res.status(200).json(err);
    }
})


//GET PRODUCT 

router.get("/fetchProduct/:searchValue", async (req,res)=>{

    let searchVal = req.params.searchValue

    try{
        const product = await Product.find({title: new RegExp(searchVal,'i')})
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/fetchProduct/specific/:id", async (req,res)=>{
    let productId = req.params.id

    try{
        const product = await Product.findById(productId);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err)
    }
})


router.get("/fetchProducts", async(req,res)=>{

    const qNew = req.query.new;
    const qCategory = req.query.category;
    console.log(qCategory);

    try{
        let products;

        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        }else if (qCategory){
            products = await Product.find({category:{
                $in: [qCategory],
            }});
        }else{
            products = await Product.find();
        }

        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
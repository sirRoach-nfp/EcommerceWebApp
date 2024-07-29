const router = require("express").Router();

const User = require("../models/User");
const Cart = require("../models/Cart")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")



//REGISTER

router.post("/register",async (req,res)=>{

    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
        
    });



    

    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

        const newCart = new Cart({
            userId: savedUser._id,
            product:[],
        })

        await newCart.save();
    }catch(err){res.status(500).json(err)}


    
})


//LOGIN

router.post("/login",async(req,res)=>{

    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.status(401).json("Wrong Credentials");
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials");
        }

        const accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin,

        }, 
            process.env.JWT_SEC,
            {expiresIn:"3d"}
    
        )

        const { password, ...others } = user._doc;

        return res.status(200).json({...others,accessToken});

        res.status(200).json(others);

    }catch(err){
        res.status(500).json(err)
    }
})




module.exports = router


const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(

    {

        userId:{
            type: String,
            required: true,
        },

        products:[
            {
                productId:{
                    type: String,
                },

                quantity:{
                    type:Number,
                    default: 1,
                },

                title:{
                    type: String,
                    required: true,
                    unique: true,
                },
        
                description:{
                    type: String,
                    required:true,
                
                },
        
                img:{
                    type: String,
                    required: true,
                },

                price:{
                    type: Number,
                    required: true,
                }
            }
        ],
   



    },
    {timestamps:true}
);




module.exports = mongoose.model("Cart",cartSchema);
const express = require("express")
const mongoose = require("mongoose");
const cors =require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();



//routest
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const checkoutRout = require("./routes/Stripe")
const cartRoute = require("./routes/cart")
app.use(cors());

app.use(express.json());
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute)
app.use("/api/product", productRoute)
app.use("/api/order", orderRoute);
app.use("/api/checkout", checkoutRout)
app.use("/api/cart",cartRoute)

mongoose.connect(
    process.env.MONGO_URL
)
.then(() => console.log("success")).catch((err)=> console.log(err));



app.get("/api/test", ()=>{
    console.log("test is successful")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Listening to port 5000")
});




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


app.use(cors);

app.use(express.json());
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute)
app.use("/api/product", productRoute)
app.use("/api/order", orderRoute);



mongoose.connect(
    process.env.MONGO_URL
)
.then(() => console.log("success")).catch((err)=> console.log(err));



app.get("/api/test", ()=>{
    console.log("test is successful")
})


app.listen(5000, ()=>{
    console.log("Listening to port 5000")
});




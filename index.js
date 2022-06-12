const express = require('express');
const connect = require('./src/config/db');
const User = require("./src/controllers/user.controller")
const Brands = require("./src/controllers/brand.controller")
const Product = require("./src/controllers/product.controller")
const Orders = require("./src/controllers/order.controller")
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

app.use("/user",User)
app.use("/brand",Brands)
app.use("/product",Product)
app.use("/order",Orders)

const PORT = process.env.PORT || 3000;


app.listen(PORT,async()=>{
    await connect

    console.log("server is running on port 8000",PORT);
})





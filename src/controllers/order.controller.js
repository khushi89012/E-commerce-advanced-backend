const express = require('express');
const router = express.Router();
const Order = require("../models/order.model")








router.get("/get",async(req,res)=>{
    try{
        const order = await Order.find().lean().exec()
        
     let out  =  res.status(200).json({

        message:"success",
        data: order
    })
        console.log(getPipeLine("11/03/2021","Product"))
     
    }
    catch(err){
        res.status(400).send(err)
    }
}
)   

router.post("/post",async(req,res)=>{
    try{
        const order = await Order.create(req.body)
        res.status(200).send(order)

    }
    catch(err){
        res.status(400).send(err)
    
    }
}
)

router.patch("/:id",async(req,res)=>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(200).send(order)

    }
    catch(err){
        res.status(400).send(err)
    
    }
}
)

router.delete("/:id",async(req,res)=>{
    try{
        const order = await Order.findByIdAndDelete(req.params.id).lean().exec()
        res.status(200).send(order)

    }
    catch(err){
        res.status(400).send(err)
    
    }
}
)





module.exports = router
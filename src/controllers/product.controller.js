const express = require('express');
const router = express.Router();
const Products = require("../models/product.model")


router.get("/",async(req,res)=>{
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 10;

        const products = await Products.find()
        .skip((page-1)*size)
        .limit(size)
        .lean()
        .exec();

        const total = Math.ceil(await Products.countDocuments()/size)


        res.status(200).send({products,total})
    }catch(err){
        res.status(400).send(err)
        console.log(err)
    }
}
)

router.post("/",async(req,res)=>{
    try{
        const product = await Products.create(req.body)
        res.status(200).send(product)

    }
    catch(err){
        res.status(400).send(err)
    
    }
})


router.get("/:id",async(req,res)=>{
    try{
        const product = await Products.findById(req.params.id).lean().exec( )
        res.status(200).send(product)

    }
    catch(err){
        res.status(400).send(err)
    
    }
})

router.put("/:id/edit",async(req,res)=>{
    try{
        const product = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.status(200).send(product)

    }
    catch(err){
        res.status(400).send(err)
    
    }
})






module.exports = router;
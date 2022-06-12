import React from 'react'
import { Button } from "@mui/material";
export default function productComponent({product}) {

    const {brandname, price, image_url} = product;

  return (
    <div className="Box">
        <div className="image">
            <img src={image_url} alt=""/>
        </div>
        <div className="info">
            <div className="brand">
                {brandname}
            </div>
            <div className="price">
                {price}
            </div>
            <Button onClick={()=>{
                            console.log("clicked")
                            addToCart(e.id)

                            alert("login first")

                        }} variant="contained" color="success">
Add to Cart
</Button>
        </div>
    </div>

  )
}

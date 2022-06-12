
// import { css } from '@emotion/react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Button } from "@mui/material";
import { CartContext } from "../context/cart";
import { useContext } from "react";
import "../styles/body.css"


// link :css file 


export const Body = ()=>{

    const { cart, addToCart , total} = useContext(CartContext);

    const [count,setCount] = useState(0);
    const handlecount = ()=>{
        setCount(count+1)
    }
const [user,setUser] = useState([]);

useEffect(()=>{

    axios.get('https://fakestoreapi.com/products').then(({ data }) => {
        setUser(data);
             console.log(data)
    })
},[])

   



    return(
        <div>
            <h1 style={{marginBottom:"30px"}} >Product Updates count:{cart}</h1>
            <h1>{user.map((e)=>{
                return(
                    <div className="container">
                     <div>
                           <img src={e.image} style={{width:"200px",height:"240px"}}/>
                        <h5>{e.title}</h5>
                        <h4>Total price : {e.price}</h4>
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
            })}</h1>

            
            
            
        </div>
    )
}
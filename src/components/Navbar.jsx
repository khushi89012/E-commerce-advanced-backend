import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import { Body } from "./body";
import { CartContext } from "../context/cart";
import { useContext } from "react";
// import {Main} from "./main";


// import { Body } from "@mui/material"



export const Navbar = ()=>{
    const { cart, addToCart, total } = useContext(CartContext);
  


    const navigate = useNavigate();


    // creating nav bar
    return(
        <div style={{color: 'white'}}>
            <nav style={{display: 'flex',flexDirection: 'row',backgroundColor:'rgb(0,46,37)',height:"70px",justifyContent:"space",fontSize:"18px"}}>
               
              
                    <div style={{marginLeft:"20px",lineHeight:"70px",fontSize:"25px",marginRight:"20px"}}><img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Shopify-128.png"
                    style={{width:"50px",height:"40px"}}/>
                    <i>Shopify</i></div>
                <div 
                 onClick = {()=>{
                    navigate("/Home")
                }} 
                 style={{marginLeft:"20px",lineHeight:"70px"}}>Start</div>
                <div style={{marginLeft:"20px",lineHeight:"70px"}}>Manage</div>
                <div style={{marginLeft:"20px",marginRight:"20px",lineHeight:"70px"}}>Sell</div>
                <div style={{marginLeft:"450px",lineHeight:"70px"}}>Pricing</div>
                <div style={{marginLeft:"20px",lineHeight:"70px"}}>Cart:{cart}</div>
                <div onClick = {()=>{
                    navigate("/login")
                }} style={{marginLeft:"20px",lineHeight:"70px"}}>Login</div>
                <div onClick = {()=>{
                    navigate("/sign")
                }} 
                style={{marginLeft:"20px",marginRight:"20px",lineHeight:"70px"}}>
                    Sign in
                </div>
                <div style={{marginLeft:"20px",lineHeight:"70px"}}>
                    <Button variant="contained" color="primary" onClick = {()=>{
                        navigate("/main")
                    }
                    }>
                        Main
                    </Button>
                </div>

                <Button variant="contained" style= {{height:"35px",marginTop:"20px",backgroundColor:"rgb(0,128,96)"}}  onClick={()=>{
                    navigate("/Body")
                }}>
 Free trial
</Button>
              
                   
             
                
                

                
              
                    
                

               
            </nav>
        </div>
    )


}
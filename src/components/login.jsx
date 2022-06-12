import "../styles/login.css"
// import { AuthContext } from "../context/authContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"



export const Login= ()=>{
    // const { isAuth, handle } = useContext(AuthContext);
    const navigate = useNavigate();



    return (
        <div className="background-img-of-login">
            <div className="login">
         <div>
             <img src = "https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_shopify-128.png"/>
             <i>Shopify</i></div>
           {/* form for login form */}
              <form >
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email"/>
                        <br></br>
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password"/>
                        <button onClick= {()=>{
                            // handle(true);
                            navigate("/userlist");

                        }}>Login  </button>
                    </div>
                        </form>



            </div>

        </div>
        
            )
}
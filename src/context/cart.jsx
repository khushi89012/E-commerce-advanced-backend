import {createContext} from 'react';
import {useContext , useState} from 'react';

export const CartContext = createContext();


export const CartContextProvider = ({children})=>{

    const [cart,setCart] = useState(0);

    const addToCart = (product)=>{
        setCart(cart+1)
    }
   const total = ()=>{
         return cart*10
    }


    return(
        <CartContext.Provider value={{cart,addToCart,total}}>
            {children}
        </CartContext.Provider>
    )
}
import { getNumberOfItemsInCart } from "../../utils/cartManagement"
import { Navigate, useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartProvider"
import { CartItemsList } from "./CartItemsList"
import { Modal } from "./Modal"
import { useContext, useState } from "react"

export const ViewCart = () => {
   const navigate = useNavigate ()
   const [cartItems] = useContext(CartContext)
   const [isVisible, setVisibility] = useState(false)

 const numberOfItemsInCart = getNumberOfItemsInCart(cartItems)

 return (
    <>
     <button onClick={()=>setVisibility(true)}>🛒{numberOfItemsInCart > 0 ? `(${numberOfItemsInCart})` : ""}</button>
     {isVisible && <Modal setVisibility={setVisibility}>
        <CartItemsList />
        <button onClick={()=>{
         navigate("/check-out")
         setVisibility (false)}
         }>Zur Kasse</button>
        </Modal>}
    </>
 )
}
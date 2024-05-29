import { useContext } from "react"
import { CartContext } from "./CartProvider"
import { CartItem } from "../components/CartItem"

export const CartItemList =() => {
    const [cartItems] = useContext(CartContext)
    const numberOfItems = cartItems.length || 0

    return(
        <div>
            <div
            style={{
                display:"grid",
                gap: "8px 8px",
                gridTemplateColumns: "1fr 5fr 2fr 2fr 1fr",
                justifyContent:"space-between",
                alignItems:"center",}}
             >
                {cartItems.map((item, index)=> <CartItem key={item.id + item.title} index={index} item={item} />)} 
             </div>
             <p>Artikel im Einkaufswagen: {numberOfItems}</p>
             <p>Gesamtpreis: € ???</p>
        </div>
    )
}
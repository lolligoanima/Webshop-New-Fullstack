import { useContext, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import { Column } from "../components/Column"
import { CartItemsList } from "../components/CartItemsList"
import { Row } from "../components/Row"
import { ConfirmModal } from "../components/Confirm"
import { CartContext } from "../context/CartProvider"


export const CheckOut = () => {
    const waitTime = 5 *1000;
    const navigate = useNavigate()
    const [, setCartItems] = useContext(CartContext)
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(waitTime / 1000)
    useEffect(()=> {
        if(isConfirmed) {
         setCartItems([])
         setTimeout(()=> navigate("/"), waitTime)
         setInterval(()=>setTimeRemaining((pre) => pre -1), 1000)
        }
    }, [isConfirmed])



    return (
        <Column>
        {isConfirmed ?(
            <p>Ihre bestellung wurde bestätigt, weiterleitung zur Homepage in {timeRemaining} Sekunden...</p>
        ):(
            <Column>
            <h2> Nutzer Info</h2>
            <CartItemsList />
            <Row style={{justifyContent: "center"}}>
                <ConfirmModal label="Bestätigen und Bestellen" setIsConfirmed={setIsConfirmed} />
                <button onClick={()=>navigate('/')}>Einkauf fortsetzen</button>
            </Row>
            </Column>

        )}
        </Column>
    )
}

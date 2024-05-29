import { useState } from "react"
import { Modal } from "./Modal"
import { Column } from "./Column"
import { Row } from "./Row"

export const ConfirmModal =({setIsConfirmed, label}) => {
    const [isVisible, setVisibility] = useState(false)
    return(
      <>  
        <button onClick={()=> setVisibility(true)}>{label}</button>
        {isVisible && <Modal setVisibility={setVisibility}>
            <Column>
            <h4>Bestätigen und bestellen?</h4>
            <Row style={{justifyContent: "center"}}>
                <button onClick={()=> {
                    setIsConfirmed(true)
                    setVisibility(false)
                }}>JA</button>
                <button onClick={() => {
                    setVisibility(false)
                }}>Zurück</button>
            </Row>
            </Column>
        </Modal>}
                      </>
    )   
    
}
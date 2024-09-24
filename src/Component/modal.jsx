import { useState } from "react"
import ".././styles/modal.css"



export default function DisplayModale(){
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleClose=() =>{
        setModalIsOpen(false)
    }

    const handleClickOutsideModal =(e) =>{
        if(e.target.className == "modal" ){
            handleClose()
        }
    }

    return(
        <div className={ modalIsOpen ? "hidde ": "backgroundModal"  }>
            <div className="modal" onClick={handleClickOutsideModal} >
                <div className="closeContent"> 
                    <p>X</p>
                </div>
                <p className="message" >Employee Created!</p>
            </div>
        </div>
    )
}
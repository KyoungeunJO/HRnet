import { redirect } from "react-router-dom"
import './style/Modal.css'

function Modal() {

    const handleClick = () => document.getElementById('modal').close()

    return (
        <dialog id='modal'>
            <p >Employee created !</p>
            <button onClick={handleClick}>X</button>
        </dialog>
    )
}

export default Modal
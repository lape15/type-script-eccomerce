import { createPortal } from "react-dom";
import Modal from './modal';

// type Element = HTMLElement;


const ModalContainer = () => {
    const portal = document.getElementById('portal');
    // console.log(portal)
    return (
        portal ? createPortal(<Modal/>, portal) : null
    )
};

export default ModalContainer;


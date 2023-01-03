import { createPortal } from "react-dom";
import Modal from './modal';
import { RootState } from '../../store';
import  {useSelector} from 'react-redux';
import SignInModal from './login';
import CheckoutModal from "./checkout-modal";
import ProductModal from "./product-modal";




const ModalContainer = () => {
    const isModal: string = useSelector((state: RootState) => state.modal.modalObj.isModal)
    const portal = document.getElementById('portal');
    const modals = {
        login: SignInModal,
        checkout: CheckoutModal,
        viewProduct: ProductModal
    }
    
    const modalToDisplay = modals[isModal as keyof typeof modals];
    
    return (
        portal ? createPortal(<Modal ModalToDisplay={modalToDisplay} />, portal) : null
    )
};

export default ModalContainer;


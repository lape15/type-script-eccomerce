// import { useState } from 'react';
import './modal.scss';
import CheckoutModal from './checkout-modal';
import ProductModal from './product-modal';
import  {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useRef } from 'react';
import {productModalDisplay, checkoutModalDisplay} from "../../slices/modal";

type Props = {
    children?: object;
}

const Modal = (props: Props) => {
    const showCheckoutModal = useSelector((state: RootState) => state.modal.checkoutModal)
    const showitemModal = useSelector((state: RootState) => state.modal.itemModal)
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const keyPressHandler = (e: React.KeyboardEvent) => {
        const modal = modalRef.current?.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        )
        const allFocusableElement = modal?.length;
        if (allFocusableElement) {
            const lastFocusableElement = modal[allFocusableElement-1] as HTMLElement;
            if ((document.activeElement === lastFocusableElement) && !e.shiftKey) {
                e.preventDefault();
                modalRef.current?.focus();
            }
            if (e.shiftKey && document.activeElement === modalRef.current) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
            if (e.code === 'Escape'){
                closeModal();
            }
        }
    }

    const closeModal = () => {
        showitemModal ? dispatch(productModalDisplay()) : dispatch(checkoutModalDisplay())
    }

    useEffect( () => {
            if(showCheckoutModal || showitemModal) {
                modalRef.current?.focus();
            }
    }, [showCheckoutModal, showitemModal])
    
    return (
        <>
        {
            (showCheckoutModal || showitemModal) &&
                <div 
                ref={modalRef}
                className="modal-wrapper"
                tabIndex={0}
                onKeyDown={keyPressHandler}
                onClick={closeModal}
                >
                    {
                        showCheckoutModal &&
                        <CheckoutModal />
                    }
                    {
                        showitemModal &&
                        <ProductModal />
                    }
                </div>
                
        }
        </>
    )
};

export default Modal;

// function e(e: any, lastFocusableElement: HTMLElement) {
//     throw new Error('Function not implemented.');
// }


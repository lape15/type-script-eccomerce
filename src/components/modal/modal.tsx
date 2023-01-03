// import { useState } from 'react';
import './modal.scss';
// import CheckoutModal from './checkout-modal';
// import ProductModal from './product-modal';
import  {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../store';
import { closeModal } from '../../slices/modal';
import { useRef , useEffect} from 'react';

type Props = {
    ModalToDisplay: () => JSX.Element;
}

const Modal = (props: Props) => {
    const {ModalToDisplay} = props;
    const isModal = useSelector((state: RootState) => state.modal.modalObj.isModal)
    const modalRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

   
    const keyPressHandler = (e: React.KeyboardEvent) => {    
        const modal = modalRef.current?.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        );  
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
                dispatch(closeModal());
            }
        }
    }

    const doCloseModal = () => {
        dispatch(closeModal());
    }

    useEffect(()=>{
        if(isModal){
        modalRef.current?.focus();
        }
    }, [isModal])

    return (
        <>
        {
            (isModal) &&
                <div 
                ref={modalRef}
                className="modal-wrapper"
                tabIndex={0}
                onKeyDown={keyPressHandler}
                onClick={doCloseModal}
                >
                    <div className='modal-items-wrapper w-50'>
                            <button 
                             className ='close-button'
                             onClick={closeModal}
                             >
                                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" 
                                    fill="#69707D" fillRule="evenodd"/>
                                </svg>
                            </button>
                        <ModalToDisplay />
                    </div>
                </div>
                
        }
        </>
    )
};

export default Modal;

// function e(e: any, lastFocusableElement: HTMLElement) {
//     throw new Error('Function not implemented.');
// }


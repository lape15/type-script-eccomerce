// if image is clicked, dispatch an action that displays the modal show itemImage
// if checkout is clicked, then show image that shows checkout successful.

import { createSlice} from "@reduxjs/toolkit";

type modalObject = {
    isModal: string,
    modalName: '',
    modalTitle:'',
    modalHasButton: boolean,
}


type ModalProps = {
    itemModal : boolean,
    id? : number,
    show: boolean,
    checkoutModal: boolean,
    loggedIn: boolean,
    modalIsOpen: boolean,
    modalIsClose: boolean,
    modalObj: modalObject
}



const initialState : ModalProps = {
    itemModal: false,
    id: 0,
    show: false,
    checkoutModal: false,
    loggedIn: false,
    modalIsOpen: false,
    modalIsClose: true,
    modalObj: {
        isModal: '',
        modalName: '',
        modalTitle:'',
        modalHasButton: false,
    },
}

const modalSlice = createSlice({
    name: 'ModalDisplay',
    initialState,
    reducers: {
        productModalDisplay(state) {
            state.itemModal= !state.itemModal;
        },
        checkoutModalDisplay(state) {
            state.checkoutModal= !state.checkoutModal;
        },
        logInModal(state){
            state.loggedIn = !state.loggedIn;
        },
        // write a function to close modal where modalClose becomes true and modalName is null
        closeModal(state){
            console.log('closethemodal')
            const {modalObj} = state
            modalObj.isModal = '';
            
        },
        // when modal is open, 
        // ensure that modalClose is true and modalName takes in the modal to be opened
        // openModal(state){
        //     return {
        //         ...state,
        //         modalIsClose: false,
        //     }
        // },
        modalToDisplay(state, action){
            const {payload}= action
            const {modalObj} = state
            modalObj.isModal = payload
            
        }
    }
})


export const {productModalDisplay, checkoutModalDisplay, logInModal, modalToDisplay, closeModal} = modalSlice.actions

export default modalSlice.reducer;
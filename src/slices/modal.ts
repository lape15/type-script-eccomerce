// if image is clicked, dispatch an action that displays the modal show itemImage
// if checkout is clicked, then show image that shows checkout successful.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type ModalProps = {
    itemModal : boolean,
    id? : number,
    show: boolean,
    checkoutModal: boolean,
}

const initialState : ModalProps = {
    itemModal: false,
    id: 0,
    show: false,
    checkoutModal: false,
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
        }
    }
})

export const {productModalDisplay, checkoutModalDisplay} = modalSlice.actions

export default modalSlice.reducer;
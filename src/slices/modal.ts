// if image is clicked, dispatch an action that displays the modal show itemImage
// if checkout is clicked, then show image that shows checkout successful.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalProps = {
    itemModal : boolean,
    id? : number,
    show: boolean,
}

const initialState : ModalProps = {
    itemModal: false,
    id: 0,
    show: false,
}

const modalSlice = createSlice({
    name: 'ModalDisplay',
    initialState,
    reducers: {
        itemModalDisplay(state) {
            state.show = !state.show,
        },
        checkoutModalDisplay(state) {

        }
    }
})
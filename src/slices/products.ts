import { createSlice} from "@reduxjs/toolkit";
import one from "../assets/images/image-product-1.jpg"
import oneThumb from '../assets/images/image-product-1-thumbnail.jpg'
import two from '../assets/images/image-product-2.jpg'
import twoThumb from '../assets/images/image-product-2-thumbnail.jpg'
import three from '../assets/images/image-product-3.jpg';
import threeThumb from '../assets/images/image-product-3-thumbnail.jpg';
import four from '../assets/images/image-product-4.jpg';
import fourThumb from '../assets/images/image-product-4-thumbnail.jpg';

const product = [
    {
        main: one,
        thumb: oneThumb,
        active:false,
    },
    {
        main:two,
        thumb: twoThumb,
        active:false
    },
    {
        main:three,
        thumb: threeThumb,
        active:false
    },
    {
        main:four,
        thumb: fourThumb,
        active:true
    }
]

const initialState = {
    activeItem: {},
    showView: product,
    cardView: product[0],
}

const productSlice = createSlice({
    name: 'productDisplay',
    initialState,
    reducers: {
        getActiveProduct: (state, action) => {
            const {showView} = state;
            const {payload} = action
            const temp = [...showView].map((sh, idx) => ({
                ...sh,
                active: payload === idx ? true : false,
              }));
            return ({
                ...state,
                showView: temp,
                cardView: temp[payload],
            })
        }
    }
})

export const {getActiveProduct} = productSlice.actions

export default productSlice.reducer
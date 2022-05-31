// import React from "react";
import { useDispatch } from "react-redux";
import { productModalDisplay } from "../../slices/modal";
import './modal.scss';
import ImageCard from "../image-card/image-card";

const ProductModal = () => {
    const dispatch = useDispatch();
    const closeModal = (e:any) => {
        e.stopPropagation();
        dispatch(productModalDisplay())
    }
    // const arr = [1,2,3,4,5,6,7]
    // const doNext = (index: number) => {
    //     if(index > 0 && index < arr.length-1){
    //         index++;
    //         console.log(arr[index])
    //     }
    // }
    // const doPrevious = (index: number) => {
    //     if(index > 0 && index <= arr.length-1){
    //         index--;
    //         console.log(arr[index])
    //     }
    // }
    // const keyEventHandler = (e: React.KeyboardEvent<HTMLDivElement>) => { 
    //     if (e.code === 'Escape'){
    //         closeModal(e);
    //     }
    // }
    // const keyHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //     if (e.code === 'tab'){
    //     }
    // }
    return (
            <div>
                <div style={{textAlign: "right"}}>
                    <button className="close-button" onClick={closeModal}>
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" 
                            fill="#69707D" fillRule="evenodd"/>
                        </svg>
                    </button>
                </div>
                <div className="product-wrapper">
                    <div 
                    className="slide-button-wrapper previous"
                    aria-label="previous"
                    tabIndex={0}
                    >
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <div 
                    className="slide-button-wrapper next"
                    aria-label="Next"
                    tabIndex={0}
                    // onClick={doNext(0)}
                    >
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <ImageCard />
                </div>

            </div>
    )
}

export default ProductModal;
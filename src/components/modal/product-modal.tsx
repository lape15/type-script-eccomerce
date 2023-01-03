import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../slices/modal";
import { getActiveProduct } from "../../slices/products";
import './modal.scss';
import ImageCard from "../image-card/image-card";
import { RootState } from "../../store";

const ProductModal = () => {
    const shoeView = useSelector((state:RootState) => state.product.showView)
    const dispatch = useDispatch(); 
    
    const getActiveItem = (shop: typeof shoeView) => {
        let itemIndex;
        for(const sh in shop){
            const item = shop[sh]
            if(item.active === true){
                itemIndex = sh;
            }
        }
        return itemIndex;
    }

    const doNext = () => {
        let index: any = getActiveItem(shoeView)
        if(index && index >= 0 && index < shoeView.length-1){
            index++;
            dispatch(getActiveProduct(index));
        }
    }

    const doPrevious = () => {
        let index: any = getActiveItem(shoeView)
        if(index > 0 && index <= shoeView.length-1){
            index--;
            dispatch(getActiveProduct(index));
        }
    }

    const keyEventHandler = (e: React.KeyboardEvent<HTMLDivElement>) => { 
        if (e.code === 'Escape'){
            dispatch(closeModal);
        }
    }
    return (
            <div
            onClick={(e) => e.stopPropagation() }
            onKeyDown = {keyEventHandler}
            >
                
                <div className="product-wrapper">
                    <div 
                    className="slide-button-wrapper previous"
                    aria-label="previous"
                    tabIndex={0}
                    onClick = {doPrevious}
                    >
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <div 
                    className="slide-button-wrapper next"
                    aria-label="Next"
                    tabIndex={0}
                    onClick={doNext}
                    >
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <ImageCard
                    />
                </div>

            </div>
    )
}

export default ProductModal;
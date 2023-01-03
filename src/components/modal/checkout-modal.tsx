import "./modal.scss"
import { checkoutModalDisplay } from "../../slices/modal"
import { useDispatch } from "react-redux"
import checkIcon from '../../assets/images/check.png'

const CheckoutModal = () => {
    const dispatch = useDispatch();
    const closeModal = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        dispatch(checkoutModalDisplay())
    }
    
    return (
        <div>
            <div className="checkout-wrapper">
                <img src={checkIcon} alt="check out successful"/>
                <div>
                    <p className="checkout-text">
                        Thank you for your purchase!
                        <br />
                        <br />
                        Checkout was successful.
                    </p>
                </div>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )

}

export default CheckoutModal;
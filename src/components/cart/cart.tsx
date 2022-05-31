import './cart.scss';
import { useState } from 'react';
import cart from '../../assets/images/icon-cart.svg';
import { removeFromCart } from '../../slices/cart';
import { checkoutModalDisplay } from '../../slices/modal';
import { RootState } from '../../store'
import { useSelector, useDispatch} from 'react-redux';
import deleteIcon from '../../assets/images/icon-delete.svg'

const Cart = () => {
    const [showCartInfo, setShowCartInfo] = useState(false);
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: RootState) => state.cart);

    const cartInfo = (e:any) => {
        e.stopPropagation();
        setShowCartInfo(!showCartInfo)
    }
    const itemAmount = (a:number,b: number): number => {
        return a * b;
    }

    console.log({cartItems});
    const removeCartItem = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const showCheckoutModal = () => {
        console.log({checkoutModalDisplay})
        dispatch(checkoutModalDisplay());
    }


    return (
    <div 
    // onMouseEnter={cartInfo}
    //      onMouseLeave={cartInfo}
    onClick={cartInfo}
    >
        <div className='cart-item'>
            {
                cartItems.length > 0 &&
                <div className="item-number">{cartItems.length}</div>
            }
            <img src={cart} alt='your cart' className='mr-1'/>
        </div>
        {showCartInfo &&
        <div onClick={(e) => e.stopPropagation() }>            
            <div className='cart-info-wrapper'>
            <h5>Cart</h5>
            <hr className='mb-0 mt-0'/>
            <div className='cart-info-display'>
            {
                cartItems.length === 0 
                ? 
                    <div className="emptyCart">
                        <p> Your cart is empty</p>
                    </div>
                : 
                    <div className="fullCart">
                        <div>
                        {
                            cartItems.map((item, index) => 
                            <div key={index} className="itemDetail">                      
                                <img src={item.imageUrl} alt={item.name} width="50px" height="50px"></img>
                                <p>
                                    {item.name} 
                                    <br/>
                                    ${item.price} x {item.quantity}&nbsp;&nbsp; <span>${itemAmount(item.price as number,item.quantity as number)}</span>
                                </p>
                                <img src={deleteIcon} alt="Delete Icon" onClick={() => removeCartItem(index)} />
                            </div>
                        )}
                        <button className='cart_btn checkout' onClick={showCheckoutModal}>Checkout</button>
                        </div>
                    </div>
            }
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Cart;

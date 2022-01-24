
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import './card.scss'
import cart from '../../assets/images/icon-cart-white.svg'
import { AppDispatch } from '../../store'
import { addToCart } from '../../slices/cart'

const shoe = {
    name: 'trendy shoe',
    id: Math.random() * 9,
    imageUrl: 'whehbfjf',
    quantity: 0,
    price: 125
}
const Card = () => {

const [count,setCount] = useState(0);
    const dispatch = () => useDispatch<AppDispatch>()

    const addItemToCart = () => {
        const cartItem = {
            ...shoe,
            quantity: count,
            price: shoe.price * count
        }
        dispatch(addToCart(cartItem))
    }

    return <div className="block  flex ">
        <h6 className="title">SNEAKER COMPANY</h6>
        {console.log({count})}
        <h3 className="head">Fall Limited Edition <br></br> Sneakers</h3>
        <section>
            <p className="details">
                These low-profile sneakers are your perfect casual wear cmpanion.Featuring a duarable rubber outer sole, they'l withstand everything the weather can offer.
            </p>
            <div className='flex-item price'>
                <h4 >
                    $125.00
                </h4>
                <div className='flex-item items-center m-1'>50%</div>
            </div>
            <div className='flex-item mt-1 btns'>
                <div className='flex-item'>
                <button className='btn' onClick={() => count && setCount(count - 1)}>&#8722;</button>
                <button className='btn zero' disabled>{count}</button>
                <button className='btn' onClick={() => setCount(count + 1)}>&#43;</button>
                </div>
                <div className='flex-item add_cart'>
                <button className='cart_btn' onClick={addItemToCart}><img src={cart} alt='cart'/> Add to cart</button>
                </div>
              
            </div>
        </section>
    </div>
}

export default Card  
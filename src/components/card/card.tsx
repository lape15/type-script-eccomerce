import './card.scss'
import cart from '../../assets/images/icon-cart-white.svg'

const Card = () => {
    return <div className="block  flex ">
        <h6 className="title">SNEAKER COMPANY</h6>
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
                <button className='btn'>&#8722;</button>
                <button className='btn zero'>0</button>
                <button className='btn'>&#43;</button>
                </div>
                <div className='flex-item add_cart'>
                <button className='cart_btn'><img src={cart} alt='cart'/> Add to cart</button>
                </div>
              
            </div>
        </section>
    </div>
}

export default Card  
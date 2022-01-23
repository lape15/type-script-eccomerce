import './card.scss'
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
            <div className='flex-item'>
            <span>$250.00</span>
            </div>
            <div className='flex-item'>
                <button>0</button>
                <button> Add to cart</button>
            </div>
        </section>
    </div>
}

export default Card  
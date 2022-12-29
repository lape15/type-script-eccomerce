// import React, {useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {  modalToDisplay } from '../../slices/modal'
import { getActiveProduct } from '../../slices/products'
import './image-card.scss'

const ImageCard = () => {
  const shoeView = useSelector((state:RootState) => state.product.showView)
  const cardView = useSelector((state:RootState) => state.product.cardView)
    const dispatch = useDispatch();

  const setActiveView = (index: number) => {
    dispatch(getActiveProduct(index))
    console.log(cardView.main, {cardView})
  };

    const keyPressHandler = (index: number) => (e: React.KeyboardEvent)=> {
        if(e.code === 'Enter'){
            setActiveView(index)
        }
    }

    const ModalDisplay = () => {
        dispatch(modalToDisplay('viewProduct'))
    }

 return ( 
       <div className='flex-item col flex items-center'>
         <div className='flex-item col'>
             <div className='img-container'> 
                 <img src={cardView.main} 
                 alt="card_img"  
                 className='img'
                 onClick = {ModalDisplay}
                 />
            </div>    
          </div>
          <div className='flex-item'>{
          shoeView.map((shoe,index) =>(
            <div
             key={index} 
             tabIndex={0}
             className={`thumb ml-1 ${shoe.active ? 'active-preview' : ''}`}
             onClick={() => setActiveView (index)}
             onKeyDown={keyPressHandler(index)}
             >
                <img 
                src={shoe.thumb} 
                alt="view" 
                className={`img ${shoe.active ? 'active-preview' : ''}`}/>
            </div>
            )
              )
             }
         </div>
    </div>
  );
};

export default ImageCard;

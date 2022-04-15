import { useState } from 'react';
import one from '../../assets/images/image-product-1.jpg';
import oneThumb from '../../assets/images/image-product-1-thumbnail.jpg';
import two from '../../assets/images/image-product-2.jpg';
import twoThumb from '../../assets/images/image-product-2-thumbnail.jpg';
import three from '../../assets/images/image-product-3.jpg';
import threeThumb from '../../assets/images/image-product-3-thumbnail.jpg';
import four from '../../assets/images/image-product-4.jpg';
import fourThumb from '../../assets/images/image-product-4-thumbnail.jpg';

import './image-card.scss';

const product = [
  {
    main: one,
    thumb: oneThumb,
    active: true,
  },
  {
    main: two,
    thumb: twoThumb,
    active: false,
  },
  {
    main: three,
    thumb: threeThumb,
    active: false,
  },
  {
    main: four,
    thumb: fourThumb,
    active: false,
  },
];
const ImageCard = () => {
  const [shoeView, setShoeView] = useState([...product]);
  const [cardView, setCardView] = useState(shoeView[0]);

  const setActiveView = (index: number) => {
    const temp = [...shoeView].map((sh, idx) => ({
      ...sh,
      active: index === idx ? true : false,
    }));
    setCardView(temp[index]);
    setShoeView([...temp]);
  };

  return (
    <div className="flex-item col flex items-center">
      <div className="flex-item col">
        <div className="img-container">
          <img src={cardView.main} alt="card_img" className="img" />
        </div>
      </div>
      <div className="flex-item">
        {shoeView.map((shoe, index) => (
          <div
            key={index}
            className={`thumb ml-1 ${shoe.active ? 'active-preview' : ''}`}
            onClick={() => setActiveView(index)}>
            <img src={shoe.thumb} alt="view" className={`img ${shoe.active ? 'active-preview' : ''}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

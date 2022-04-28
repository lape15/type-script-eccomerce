import { Item } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import item from './item.module.scss';
import { addCartItem } from '../../slices/cart';
type ShopItemProp = {
  collection: Item;
};

const ShopItem = (props: ShopItemProp) => {
  const { collection } = props;
  const dispatch = useDispatch();
  return (
    <div key={collection.id} className={item.item}>
      <img src={collection.imageUrl} alt="item" className={item.img} />
      <div className={item.details}>
        <div className={item.deets}>
          <h3>{collection.name}</h3>
          <p>&#36;{collection.price}</p>
        </div>
        <button className={item.cart} onClick={() => dispatch(addCartItem(collection, true))}>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ShopItem;

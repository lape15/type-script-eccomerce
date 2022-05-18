import { useState, useEffect } from 'react';
import SHOP_DATA from '../../shop-data';
import collections from './collections.module.scss';
import { Item, getItemsKey, getValue } from '../../utils/utils';
import ShopItem from '../../components/shop-item/item';
import { useParams, Link } from 'react-router-dom';


const Collections = () => {
  const [collectionItems, setCollectionItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const shopItem = params.category;
  const shopKey = Object.keys(SHOP_DATA);
  console.log( {params}, params.category);

  useEffect(() => {
    setLoading(true);
    const timedId = setTimeout(() => {
    const goods = getValue(shopItem!, SHOP_DATA)
    setCollectionItems(shopItem ? goods.items : getItemsKey(SHOP_DATA));
    setLoading(false);
    }, 4000);
    () => clearTimeout(timedId);
  }, [params]);

  return (
    <div className={collections.wrapper}>
      <ul className={collections.list}>
        {
            shopKey.map((key, idx) => 
              <li>
                <Link to={`/collections/${key}`} key={idx}>{key}</Link>
              </li>
            )
        }
      </ul>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={collections.items}>
          {collectionItems.map((collection) => (
            <ShopItem collection={collection} key={collection.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;

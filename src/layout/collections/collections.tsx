import { useState, useEffect } from 'react';
import SHOP_DATA from '../../shop-data';
import collections from './collections.module.scss';
import { Item, ShopData, getItemsKey } from '../../utils/utils';

const Collections = () => {
  const [collectionItems, setCollectionItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timedId = setTimeout(() => {
      setCollectionItems(getItemsKey(SHOP_DATA));
      setLoading(false);
    }, 4000);
    () => clearTimeout(timedId);
  }, []);

  return (
    <div className={collections.wrapper}>
      {console.log({ collectionItems })}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={collections.items}>
          {collectionItems.map((collection) => (
            <div key={collection.id} className={collections.item}>
              <div>
                <h3>{collection.name}</h3>
                <img src={collection.imageUrl} alt="item" />
              </div>
              <div>
                <p>{collection.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;

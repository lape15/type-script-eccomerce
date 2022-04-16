import { useState, useEffect } from 'react';
import SHOP_DATA from '../../shop-data';
import collections from './collections.module.scss';
import { Item, getItemsKey } from '../../utils/utils';
import ShopItem from '../../components/shop-item/item';

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

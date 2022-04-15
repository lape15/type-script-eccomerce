import { useState, useEffect } from 'react';
import SHOP_DATA from '../../shop-data';
import collections from './collections.module.scss';
import { Item, ShopData, getItemsKey } from '../../utils/utils';

const Collections = () => {
  const [collectionItems, setCollectionItems] = useState(getItemsKey(SHOP_DATA));

  return <div className={collections.wrapper}>Might all collections reside here or not</div>;
};

export default Collections;

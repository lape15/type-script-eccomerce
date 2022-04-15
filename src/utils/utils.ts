export type Item = {
  name?: string;
  id?: number;
  imageUrl?: string;
  quantity?: number;
  price?: number;
};
export interface ShopData {
  hats: {
    id: number;
    title: string;
    routeName: string;
    items: Array<Item>;
  };
  sneakers: {
    id: number;
    title: string;
    routeName: string;
    items: Array<Item>;
  };
  jackets: {
    id: number;
    title: string;
    routeName: string;
    items: Array<Item>;
  };
  women: {
    id: number;
    title: string;
    routeName: string;
    items: Array<Item>;
  };
  men: {
    id: number;
    title: string;
    routeName: string;
    items: Array<Item>;
  };
}

export function getValue(key: keyof ShopData, data: ShopData) {
  return data[key];
}

export const getItemsKey = (collectionItems: ShopData): Array<ShopData> => {
  const items: any = [];
  const itemKeys = Object.keys(collectionItems);
  for (let i = 0; i < itemKeys.length; i += 1) {
    items.push(...getValue(itemKeys[i] as keyof ShopData, collectionItems).items);
  }
  return items;
};

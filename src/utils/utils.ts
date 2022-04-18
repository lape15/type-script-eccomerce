export type Item = {
  name?: string;
  id?: number;
  imageUrl?: string;
  quantity?: number;
  price?: number;
};
export interface ShopData {
  [key: string]: {
    id: number;
    title: string;
    routeName: string;
    items: Array<Item>;
  };
}

export function getValue(key: keyof ShopData, data: ShopData) {
  return data[key];
}

export const getItemsKey = (collectionItems: ShopData): Array<Item> => {
  const items: any = [];
  const itemKeys = Object.keys(collectionItems);
  for (let i = 0; i < itemKeys.length; i += 1) {
    items.push(...getValue(itemKeys[i] as keyof ShopData, collectionItems).items);
  }
  return items;
};

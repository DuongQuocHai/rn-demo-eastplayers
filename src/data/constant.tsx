export interface IColorProduct {
  id: number;
  name?: string;
}

export const LIST_COLORS: Array<IColorProduct> = [
  {id: 1, name: 'Đen'},
  {id: 2, name: 'Trắng'},
  {id: 3, name: 'Xanh'},
];

export interface ISizeProduct {
  id: number;
  name?: string;
}

export const LIST_SIZES: Array<ISizeProduct> = [
  {id: 1, name: 'S'},
  {id: 2, name: 'M'},
  {id: 3, name: 'L'},
  {id: 4, name: 'XL'},
  {id: 5, name: '2XL'},
];

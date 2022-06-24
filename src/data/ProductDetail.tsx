import { IMAGES } from "../assets/images";
import { IColorProduct, ISizeProduct } from "./constant";

export interface IImage  {
  url: string
}

interface IProductDetail  {
  images: Array<IImage>
  name: string;
  percentDiscount: number,
  price: number,
  rootPrice: number,
  star: number,
  countRate: number,
  countSold: number,
  isFollowed: boolean,
  colors: Array<IColorProduct>
  sizes: Array<ISizeProduct>
};

export const ProductDetail: IProductDetail = {
  images: [
    {url: IMAGES.IMG_PRODUCT},
    {url: IMAGES.IMG_PRODUCT},
    {url: IMAGES.IMG_PRODUCT},
  ],
  name: 'Solid Pocket Button Lapel Long Sleeve Blue Cotton 100%',
  percentDiscount: 10,
  price: 406000,
  rootPrice: 446600,
  star: 5,
  countRate: 996,
  countSold: 1201,
  isFollowed: true,
  colors: [{id: 1}, {id: 3}],
  sizes: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}],
};

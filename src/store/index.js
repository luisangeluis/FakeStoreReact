import { configureStore } from '@reduxjs/toolkit';
import categories from './slices/categories.slice';
import showModalCart from './slices/showModalCart.slice';
import products from './slices/products.slice';

export default configureStore({
  reducer: {
    categories,
    showModalCart,
    products,
  },
});

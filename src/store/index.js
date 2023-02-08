import { configureStore } from '@reduxjs/toolkit';
import categories from './slices/categories.slice';
import showModalCart from './slices/showModalCart.slice';

export default configureStore({
  reducer: {
    categories,
    showModalCart,
  },
});

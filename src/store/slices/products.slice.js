//Dependencies
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com';

export const productsSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;

export const getAllProducts = () => (dispatch) => {
  axios
    .get(`${baseUrl}/products`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export const getProductsByCategory = (category) => (dispatch) => {
  axios
    .get(`${baseUrl}/products/category/${category}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

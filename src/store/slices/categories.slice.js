import {} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit/';
import axios from 'axios';
const baseUrl = 'https://fakestoreapi.com';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: null,
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
  },
});

export default categoriesSlice.reducer;
export const { setCategories } = categoriesSlice.actions;

export const getCategories = () => (dispatch) => {
  axios
    .get(`${baseUrl}/products/categories`)
    .then((res) => {
      // console.log(res);
      dispatch(setCategories(res.data));
    })
    .catch((error) => console.log(error));
};

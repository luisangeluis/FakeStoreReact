import { createSlice } from '@reduxjs/toolkit';

const showModalCartSlice = createSlice({
  name: 'showModalCart',
  initialState: false,
  reducers: {
    setShowModalCart: (state, action) => action.payload,
  },
});

export default showModalCartSlice.reducer;
export const { setShowModalCart } = showModalCartSlice.actions;

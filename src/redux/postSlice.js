import { createSlice } from '@reduxjs/toolkit';
import { getAddressPosts, getDataTtn } from './postOperation';

const initialState = {
  ttnValue: {},
  historyPost: [],
  addressPosts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changeTtnValue(state, action) {
      const newValue = state.historyPost.find(
        el => el.Number === action.payload
      );
      state.ttnValue = newValue;
    },
    deleteHistoryPost(state) {
      state.historyPost = [];
    },
    deleteTtn(state) {
      state.ttnValue = {};
    },
    deleteAddressPosts(state) {
      state.addressPosts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDataTtn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDataTtn.fulfilled, (state, action) => {
        state.ttnValue = action.payload;
        state.historyPost.push(action.payload);
        state.loading = false;
      })
      .addCase(getDataTtn.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getAddressPosts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddressPosts.fulfilled, (state, action) => {
        state.addressPosts = action.payload;
        state.loading = false;
      })
      .addCase(getAddressPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {
  changeTtnValue,
  deleteHistoryPost,
  deleteTtn,
  deleteAddressPosts,
} = postSlice.actions;
export default postSlice.reducer;

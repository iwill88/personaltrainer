import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const initialState = {
  category: "",
  price: "",
  rating: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addCategory: (state, { payload }) => {
      state.category = payload;
    },
    addPrice: (state, { payload }) => {
      state.price = payload;
    },
    addRating: (state, { payload }) => {
      state.rating = payload;
    },
    reset: (state) => {
      state.category = "";
      state.price = "";
      state.rating = "";
    },
  },
});


export const selectFilter = (state: RootState) => state.filter;

export const { addCategory, addPrice, addRating, reset } = filterSlice.actions;

export default filterSlice.reducer;
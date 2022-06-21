import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {

    style: "Style",
    name: "Name",
    abv: "ABV",
    year: "Year",

  },
  reducers: {
    chooseStyle: (state, action) => {
      state.style = action.payload;
    },
    chooseName: (state, action) => {
      state.name = action.payload;
    },
    chooseABV: (state, action) => {
      state.abv = action.payload;
    },
    chooseYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const {
  chooseStyle,
  chooseName,
  chooseABV,
  chooseYear,
} = rootSlice.actions;

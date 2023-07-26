import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  country: "default",
  range: 0,
  category: "default",
  sortBy: "default",
};
export const PropertySlice = createSlice({
  name: "Property",
  initialState,
  reducers: {
    changeCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    changeRange(state, action: PayloadAction<number>) {
      state.range = action.payload;
    },
    changeCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    sortingOption(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
  },
});
export const {changeCategory,changeCountry,changeRange,sortingOption} = PropertySlice.actions;
export default PropertySlice.reducer;
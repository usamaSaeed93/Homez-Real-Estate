import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  country: "Pakistan",
  range: 3000,
  category: "Villa",
  sortBy: "default",
  loginStatus:false,
  createdBy:""
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
    isLogin(state,action:PayloadAction<boolean>){
      state.loginStatus = action.payload;
    },
   creatorInfo(state,action:PayloadAction<string>){
      state.createdBy = action.payload;
    }
  },
});
export const {changeCategory,changeCountry,changeRange,sortingOption,isLogin,creatorInfo} = PropertySlice.actions;
export default PropertySlice.reducer;
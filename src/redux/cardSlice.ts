import { ITrips } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  packages: ITrips[];
}
const initialState: ICart = {
  packages: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ITrips>) => {
      state.packages.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

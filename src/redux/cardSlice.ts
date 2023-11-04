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
      // state.packages.push(action.payload);
      const existing = state.packages.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.packages.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementItemToCart: (state, action: PayloadAction<ITrips>) => {
      const existing = state.packages.find(
        (item) => item.id === action.payload.id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.packages.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemToCart: (state, action: PayloadAction<ITrips>) => {
      state.packages = state.packages.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const { addToCart, removeItemToCart, decrementItemToCart } =
  cartSlice.actions;
export default cartSlice.reducer;

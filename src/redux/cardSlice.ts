import { ITrips } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  packages: ITrips[];
  total: number;
}
const initialState: ICart = {
  packages: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ITrips>) => {
      const existing = state.packages.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        return;
      } else {
        state.packages.push(action.payload);
        state.total += action.payload.price;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    removeItemToCart: (state, action: PayloadAction<ITrips>) => {
      state.packages = state.packages.filter(
        (item) => item.id !== action.payload.id
      );
      state.total -= action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addToCart, removeItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
//localStorage.setItem("cart", JSON.stringify(state));

/*
interface ICart {
  packages: ITrips[];
  total: number;
}
const initialState: ICart = {
  packages: [],
  total: 0,
};
*/

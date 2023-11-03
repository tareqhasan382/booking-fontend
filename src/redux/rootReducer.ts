import { baseApi } from "./api/baseApi";
import cartReducer from "@/redux/cardSlice";
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
};

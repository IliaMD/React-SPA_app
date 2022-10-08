import { configureStore } from "@reduxjs/toolkit";
import { CardReducer } from "./Card";

export const store = configureStore({
  reducer: { cards: CardReducer },
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    addNewCard: (state, action) => {
      const { img, title, price } = action.payload;
      const id = uuidv4();

      state.push({
        id: id,
        img: img,
        title: title,
        price: price,
      });
    },

    deleteCard: (state, action) => {
      const filteredCards = state.filter(
        (card) => card.id !== action.payload.id
      );
      return filteredCards;
    },
  },
});

export const { addNewCard, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;

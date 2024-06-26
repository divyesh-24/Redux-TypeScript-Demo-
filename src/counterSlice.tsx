import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    zero: (state) => {
      state.value = 0;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { zero, increment, decrement, incrementByAmount } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

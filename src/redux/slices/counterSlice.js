import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    arttir: (state, action) => {
      console.log(action);
      state.count += action.payload.amount;
    },
    azalt: (state, action) => {
      state.count -= 1;
    },
  },
});

export const { arttir, azalt } = counterSlice.actions;
export default counterSlice.reducer;

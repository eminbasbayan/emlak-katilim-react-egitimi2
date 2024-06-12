import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeMode: "light",
  },
  reducers: {
    themeModeHandler: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
  },
});

export const { themeModeHandler } = themeSlice.actions;
export default themeSlice.reducer;

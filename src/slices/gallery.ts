import { createSlice } from "@reduxjs/toolkit";
import { gallery } from "../data/dummyGallery";

export interface ProjectsState {
  value: string[];
}

const initialState: ProjectsState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

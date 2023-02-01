import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../data/dummyProjects";

type Project = {
  id: number | string;
  title: string;
  author: string;
  track: number;
  images: string[];
};

export interface ProjectsState {
  value: Project[];
}

const initialState: ProjectsState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

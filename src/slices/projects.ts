import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../data/dummyProjects";
import { resetAll } from "../store";

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
  value: projects,
};

export const counterSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

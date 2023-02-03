import { createSlice } from "@reduxjs/toolkit";
import { tracks } from "../data/dummyTracks";

type Tech = {
  name: string;
  infoUrl: string;
};

export type Track = {
  id: string | number;
  name: string;
  cover: string;
  thumbnail: string;
  tech: Tech[];
  detailsAr: string;
  detailsEn: string;
  prereqAr: string[];
  prereqEn: string[];
};

export interface TrackState {
  value: Track[];
}

const initialState: TrackState = {
  value: tracks,
};

export const counterSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

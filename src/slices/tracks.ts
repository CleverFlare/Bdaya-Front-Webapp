import { createSlice } from "@reduxjs/toolkit";
import { dummyTestimonials } from "../data/dummyTestimonials";
import { tracks } from "../data/dummyTracks";

type Tech = {
  name: string;
  infoUrl: string;
};

type Track = {
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

import { createSlice } from "@reduxjs/toolkit";
import { dummyTestimonials } from "../data/dummyTestimonials";

type Testimonial = {
  pfp: string | null;
  author: string;
  body: string;
};

export interface TestimonialState {
  value: Testimonial[];
}

const initialState: TestimonialState = {
  value: dummyTestimonials,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

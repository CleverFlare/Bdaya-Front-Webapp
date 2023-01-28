import { createSlice } from "@reduxjs/toolkit";
import { dummyTestimonials } from "../data/dummyTestimonials";

type Testimonial = {
  pfp: string | null;
  author: string;
  track: string;
  body: string;
};

export interface TestimonialState {
  value: Testimonial[];
}

const initialState: TestimonialState = {
  value: dummyTestimonials,
};

export const counterSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

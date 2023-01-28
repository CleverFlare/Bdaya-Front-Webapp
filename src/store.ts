import { configureStore } from "@reduxjs/toolkit";
import testimonial from "./slices/testimonial";
import tracks from "./slices/tracks";

export const store = configureStore({
  reducer: {
    testimonials: testimonial,
    tracks: tracks,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

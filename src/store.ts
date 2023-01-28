import { configureStore } from "@reduxjs/toolkit";
import testimonial from "./slices/testimonial";

export const store = configureStore({
  reducer: {
    testimonials: testimonial,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

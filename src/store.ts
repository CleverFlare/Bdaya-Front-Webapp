import { configureStore, createAction } from "@reduxjs/toolkit";
import gallery from "./slices/gallery";
import projects from "./slices/projects";
import testimonial from "./slices/testimonial";
import tracks from "./slices/tracks";
import user from "./slices/user";

export const resetAll = createAction("REVERT_ALL");

export const store = configureStore({
  reducer: {
    testimonials: testimonial,
    tracks: tracks,
    projects: projects,
    gallery: gallery,
    user: user,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

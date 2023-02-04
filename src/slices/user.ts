import { createSlice } from "@reduxjs/toolkit";

export type User = {
  id: string | number;
  firstName: string;
  lastName: string;
  track: string | number;
};

export interface UserState {
  value: User | null;
}

const initialState: UserState = {
  value: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;

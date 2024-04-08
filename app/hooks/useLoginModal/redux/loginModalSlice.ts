import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/lib/store";

// Define a type for the slice state
export interface LoginModalState {
  isOpen: boolean;
  isClose: boolean;
}

// Define the initial state using that type
const initialState: LoginModalState = {
  isOpen: false,
  isClose: false,
};

export const loginModalSlice = createSlice({
  name: "loginmodal",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = loginModalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default loginModalSlice.reducer;

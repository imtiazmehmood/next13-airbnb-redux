import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../app/lib/store";

// Define a type for the slice state
export interface RegisterModalState {
  isOpen: boolean;
  isClose: boolean;
}

// Define the initial state using that type
const initialState: RegisterModalState = {
  isOpen: false,
  isClose: false,
};

export const registerModalSlice = createSlice({
  name: "registermodal",
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

export const { onOpen, onClose } = registerModalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default registerModalSlice.reducer;

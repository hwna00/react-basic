import { configureStore, createSlice } from "@reduxjs/toolkit";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const initialState = { value: 0 };
number.innerText = initialState.value;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      number.innerText = ++state.value;
    },
    decrement: (state) => {
      number.innerText = --state.value;
    },
  },
});

const { increment, decrement } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

plus.addEventListener("click", () => {
  counterStore.dispatch(increment());
});

minus.addEventListener("click", () => {
  counterStore.dispatch(decrement());
});

import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialState = [];
if (localStorage.getItem("toDos") != null) {
  const data = localStorage.getItem("toDos");
  initialState = JSON.parse(data);
}

const toDos = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    remove: (state, action) => {
      const newState = state.filter((toDo) => toDo.id !== action.payload);
      localStorage.setItem("toDos", JSON.stringify(newState));
      return newState;
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;
export default store;

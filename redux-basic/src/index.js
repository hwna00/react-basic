import { configureStore, createSlice } from "@reduxjs/toolkit";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const initialState = { todos: [] };

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.todos = [...state.todos, { text: action.payload, id: Date.now() }];
    },
    deleteItem: (state, action) => {
      console.log("delete item");
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

const { addItem, deleteItem } = listSlice.actions;
const listReducer = listSlice.reducer;

const listStore = configureStore({
  reducer: {
    list: listReducer,
  },
});

const paintTodos = () => {
  const todos = listStore.getState().list.todos;
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", (event) => {
      // const id = event.target.parentNode.id;
      listStore.dispatch(deleteItem(todo.id));
    });
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
listStore.subscribe(paintTodos);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value;
  input.value = "";
  listStore.dispatch(addItem(text));
});

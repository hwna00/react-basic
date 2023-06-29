import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };

  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add Todo</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default App;

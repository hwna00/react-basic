import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => {
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
          onChange={handleChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add Todo</button>
      </form>
      <hr></hr>
      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

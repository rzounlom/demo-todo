import "./App.css";

import TodoList from "./components/todo-list/TodoList";
import { initialTodos } from "./data";
import { useState } from "react";

const BaseUrl = "https://64407795792fe886a88f6162.mockapi.io/api/todos";

function App() {
  // State to manage the input field for new todo names
  const [todoName, setTodoName] = useState("");
  // State to manage the confidence level for new todos
  const [confidence, setConfidence] = useState(5);

  const onTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };

  // console.log(todoName);

  const addTodo = async () => {
    //checking if the todoName is not empty
    if (todoName) {
      const newTodo = {
        name: todoName,
        completed: false,
        confidence: parseInt(confidence, 10),
      };

      try {
        await fetch(`${BaseUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <div className="todo-header">
        {/* Input field for new todo names */}
        <input
          className="add-todo"
          type="text"
          placeholder="Add a new todo..."
          value={todoName}
          onChange={onTodoNameChange}
          style={{ flexGrow: 1, marginRight: "10px" }}
        />
        {/* Input field for confidence level */}
        <input
          className="todo-confidence"
          type="number"
          min="1"
          max="5"
          value={confidence}
          onChange={(e) => setConfidence(e.target.value)}
        />
        <button onClick={addTodo}>Submit</button>
      </div>
      {/* Component to render the list of todos */}
      <TodoList todos={initialTodos} />
    </div>
  );
}

export default App;

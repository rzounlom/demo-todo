import "./Todo.css";

const Todo = ({ id, name, completed, confidence, toggleTodo, removeTodo }) => {
  console.log({ id, name, completed, confidence });
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id, completed)}
      />
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {name} (Confidence: {confidence})
      </span>
      {/* Button to remove a todo */}
      <button onClick={() => removeTodo(id)}>Remove</button>
    </li>
  );
};

export default Todo;

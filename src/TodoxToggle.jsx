 import { useState } from "react";

function generateId() {
  return Math.floor(Math.random() * 10);
}


const TodoxToggle = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1bc8d3");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1bc8d3" ? "#ffa31a" : "#1bc8d3");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }


  return (
    <section className="fullbody" style={{ backgroundColor, color: textColor }}>
      <button
      className="button"
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Add</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}

export default TodoxToggle;
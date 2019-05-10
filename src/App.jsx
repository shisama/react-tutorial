import React from "react";
import TodoList from "./TodoList";

export default prop => {
  const [text, setText] = React.useState("a");
  const [todos, setTodos] = React.useState([]);

  const clickFn = () => {
    const _todos = [...todos];
    _todos.push(text);
    setTodos(_todos);
  };
  const changeInput = e => {
    const text = e.target.value;
    setText(text);
  };

  let list = null;
  if (todos.length !== 0) {
    list = <TodoList todos={todos} />;
  }

  return (
    <div>
      <input type="text" onChange={changeInput} />
      <button onClick={clickFn}>click me</button>
      {list}
    </div>
  );
};

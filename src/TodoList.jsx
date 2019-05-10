import React from "react";

export default props => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      })}
    </ul>
  );
};

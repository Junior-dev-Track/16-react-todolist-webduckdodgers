import React, { useState } from "react";
import * as Tag from "./Containers.jsx";

export const App = () => {
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, task.value]);
    task.value = null;
  };

  return (
    <main>
      <h1>To-Do List</h1>
      <div>
        <input type="text" id="task" />
        <input type="button" value="Add" onClick={addTask} />
      </div>
      <ul>
        {list.map((text, index) => (
          <Tag.Task text={text} key={index} />
        ))}
      </ul>
    </main>
  );
};

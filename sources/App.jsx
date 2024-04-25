import React, { useState, useEffect, useRef } from "react";
import { Task } from "./Task.jsx";

export const App = () => {
  const [list, _list] = useState([]);

  const inputText = useRef();

  const onSubmitForm = (element) => {
    element.preventDefault();

    const form = element.target;
    const task = {
      completed: false,
      title: inputText.current.value,
    };

    _list([...list, task]);

    form.reset();
  };

  const completeTask = (key) => {
    _list(
      list.map((task, index) => {
        if (index === key) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const editTask = (key) => {};

  const deleteTask = (key) => {
    list.filter((task, index) => {
      return index !== key;
    });
  };

  return (
    <main>
      <h1>Task List</h1>

      <form onSubmit={onSubmitForm}>
        <input type="text" ref={inputText} />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map(({ title, completed }) => (
          <Task
            key={title}
            completed={completed}
            text={title}
            onComplete={() => completeTask(title)}
            onEdit={() => editTask(title)}
            onDelete={() => deleteTask(title)}
          />
        ))}
      </ul>
    </main>
  );
};

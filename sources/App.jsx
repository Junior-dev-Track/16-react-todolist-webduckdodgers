import React, { useState } from "react";
import { Task } from "./Task.jsx";

export const App = () => {
  const [list, setList] = useState([]);
  console.log(list);

  const addTask = () => {
    const newTask = {
      id: task.id,
      completed: false,
      text: task.value,
    };

    setList([...list, newTask]);
    task.value = null;
  };

  const completeTask = (indexToComplete) => {
    setList(
      list.map((task, index) => {
        if (index === indexToComplete) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const editTask = (indexToEdit) => {};

  const deleteTask = (indexToDelete) => {
    const updatedList = list.filter((task, currentIndex) => {
      return currentIndex !== indexToDelete;
    });
    setList(updatedList);
  };

  return (
    <main>
      <h1>Task List</h1>
      <form>
        <input type="text" id="task" />
        <input type="button" value="Add" onClick={addTask} />
      </form>
      <ul>
        {list.map((task, index) => (
          <Task
            id={index}
            key={task.id}
            completed={task.completed}
            text={task.text}
            onComplete={() => completeTask(task.id)}
            onEdit={() => editTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </main>
  );
};

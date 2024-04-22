export const Task = ({ text }) => {
  const completeTask = () => {
    const tag = prepend;
    console.log(tag);
  };

  return (
    <li>
      <p>{text}</p>
      <div>
        <button onClick={completeTask}>Complete</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

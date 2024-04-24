export const Task = (props) => {
  return (
    <li className="task">
      <input type="checkbox" onClick={props.onComplete} />
      <input
        type="text"
        className={props.completed ? "text-complete" : "text"}
        onChange={(event) => event.target.value}
        value={props.text}
      />
      <div className="button-edit" onClick={props.onEdit}>
        Edit
      </div>
      <div className="button-delete" onClick={props.onDelete}>
        Delete
      </div>
    </li>
  );
};

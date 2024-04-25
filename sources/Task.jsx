export const Task = (props) => {
  const { completed, text, onComplete, onEdit, onDelete } = props;
  return (
    <li className="task">
      <input type="checkbox" onClick={onComplete} />
      <input
        type="text"
        className={completed ? "text-complete" : "text"}
        value={text}
      />
      <div className="button-edit" onChange={onEdit}>
        Edit
      </div>
      <div className="button-delete" onClick={onDelete}>
        Delete
      </div>
    </li>
  );
};

export const Form = (props) => {
  return (
    <form>
      <input type="text" id="task" />
      <input type="button" value="Add" onClick={props} />
    </form>
  );
};

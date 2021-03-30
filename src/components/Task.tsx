import { FaTrash } from "react-icons/fa";
import { ITask } from "../models/props/ITask";

const Task = (props: ITask) => {
  const { task, onDelete, onToggle } = props;

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTrash
          style={{ color: "grey", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

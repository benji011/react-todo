import { FaTimes } from "react-icons/fa";
import { ITask } from "../models/props/ITask";

const Task = (props: ITask) => {
  const { task, onDelete, onToggle } = props;

  return (
    <div
      className={`task card ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="card-content">
        <div className="content">
          <h3>
            {task.text}{" "}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </h3>
          <p>{task.day}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;

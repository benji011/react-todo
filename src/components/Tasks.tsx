import { ITask } from "../models/ITask";
import { ITasks } from "../models/props/ITasks";
import Task from "./Task";

const Tasks = (props: ITasks) => {
  const { tasks, onDelete, onToggle } = props;
  return (
    <>
      {tasks.map((task: ITask) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

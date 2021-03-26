import { ITask as ITaskInfo } from "../ITask";

export interface ITask {
  task: ITaskInfo;
  onDelete: Function;
  onToggle: Function;
}

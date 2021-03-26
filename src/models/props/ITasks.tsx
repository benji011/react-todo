import { ITask } from "../ITask";
export interface ITasks {
  tasks: ITask[];
  onDelete: Function;
  onToggle: Function;
}

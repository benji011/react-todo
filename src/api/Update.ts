import { API_URL, API_KEY, BEARER_TOKEN } from "../constants";
import { ITask } from "../models/ITask";
import { isDevMode } from "../utils";

/**
 * Update task
 *
 * @param id ID of a task
 */
export const updateTaskData = async (
  id: number,
  task: ITask,
  updatedTask: ITask,
  tasks: ITask[],
  setTasks: Function
) => {
  const url: string = isDevMode()
    ? API_URL + id
    : `${API_URL}?id=eq.${id}&${API_KEY}`;
  const res: Response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: BEARER_TOKEN,
      Prefer: "return=representation",
    },
    body: JSON.stringify(updatedTask),
  });
  if (isDevMode()) {
    await res.json().then((data: ITask) => {
      if (res.ok) {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, reminder: data.reminder } : task
          )
        );
      }
    });
  } else {
    await res.json().then((data: ITask[]) => {
      if (res.ok) {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, reminder: data[0].reminder } : task
          )
        );
      }
    });
  }
};

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
  updatedTask: ITask
) => {
  const url: string = isDevMode()
    ? API_URL + id
    : `${API_URL}?id=eq.${id}&${API_KEY}`;
  return await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: BEARER_TOKEN,
      Prefer: "return=representation",
    },
    body: JSON.stringify(updatedTask),
  });
};

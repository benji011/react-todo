import { API_URL, API_KEY, BEARER_TOKEN } from "../constants";
import { ITask } from "../models/ITask";
import { isDevMode } from "../utils";

/**
 * Adds task
 *
 * @param task An ITask typed object with the task ID, text, day and reminder values.
 */
export const addTaskData = async (task: ITask) => {
  const url: string = isDevMode() ? API_URL : `${API_URL}?${API_KEY}`;
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: BEARER_TOKEN,
      Prefer: "return=representation",
    },
    body: JSON.stringify(task),
  });
};

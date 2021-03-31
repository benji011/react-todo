import { API_URL, API_KEY, BEARER_TOKEN } from "../constants";
import { ITask } from "../models/ITask";

/**
 * Adds task
 *
 * @param task An ITask typed object with the task ID, text, day and reminder values.
 */
export const addTaskData = async (task: ITask) => {
  const url: string =
    process.env.NODE_ENV === "development" ? API_URL : `${API_URL}?${API_KEY}`;
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

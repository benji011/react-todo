import { API_URL, API_KEY, BEARER_TOKEN } from "../constants";
import { isDevMode } from "../utils";

/**
 * Delete task
 *
 * @param id ID of a task
 */
export const deleteTaskData = async (id: number) => {
  const url: string = isDevMode()
    ? API_URL + id
    : `${API_URL}?id=eq.${id}&${API_KEY}`;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: BEARER_TOKEN,
    },
  });
  // setTasks(tasks.filter((task) => task.id !== id));
};

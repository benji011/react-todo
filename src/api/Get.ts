import { API_URL, API_KEY } from "../constants";
/**
 * An async function that fetches the todo list items from JSON db
 */
export const fetchTasks = async () => {
  const url: string =
    process.env.NODE_ENV === "development"
      ? API_URL
      : `${API_URL}?select=*&${API_KEY}`;
  const res: Response = await fetch(url);
  const data = await res.json();
  return data;
};

/**
 * An async function that fetches a single task from a todo list
 * items from JSON db
 *
 */
export const fetchTask = async (id: number) => {
  if (process.env.NODE_ENV === "development") {
    const res: Response = await fetch(API_URL + id);
    const data = await res.json();
    return data;
  } else {
    const res: Response = await fetch(`${API_URL}?id=eq.${id}&${API_KEY}`);
    const data = await res.json();
    return data[0];
  }
};

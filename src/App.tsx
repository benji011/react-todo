import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import { ITask } from "./models/ITask";

function App() {
  const defaultTasks: ITask[] = [];
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(defaultTasks);

  /**
   * Get tasks from our JSON db
   * Note: By default, effects run after every completed render.
   */
  useEffect(() => {
    const getTasks = async () => {
      const tasks: ITask[] = await fetchTasks();
      setTasks(tasks);
    };
    getTasks();
  }, []);

  /**
   * An async function that fetches the todo list items from JSON db
   *
   */
  const fetchTasks = async () => {
    const res: Response = await fetch("http://localhost:3001/data");
    const data = await res.json();
    return data;
  };

  /**
   * Adds task
   *
   * @param task An ITask typed object with the task ID, text, day and reminder values.
   */
  const addTask = async (task: ITask) => {
    const res: Response = await fetch("http://localhost:3001/data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data: ITask = await res.json();
    setTasks([...tasks, data]);
  };

  /**
   * Delete task
   *
   * @param id ID of a task
   */
  const deleteTask = async (id: number) => {
    await fetch(`http://localhost:3001/data/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Toggle reminder
   *
   * @param id ID of a task
   */
  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container is-widescreen">
      <Header
        title="To do"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No items left</h3>
      )}
    </div>
  );
}

export default App;

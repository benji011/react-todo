import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { tasks as taskData } from "./data/tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(taskData);

  /**
   * Delete task
   *
   * @param id ID of a task
   */
  const deleteTask = (id: number) => {
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
      <Header title="To do" />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No items left</h3>
      )}
    </div>
  );
}

export default App;

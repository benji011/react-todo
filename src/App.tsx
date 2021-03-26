import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { tasks as taskData } from "./data/tasks";
import AddTask from "./components/AddTask";
import { ITask } from "./models/ITask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(taskData);

  /**
   * Get a new task id by reading the max task.id + 1
   *
   * @returns A number type task id
   */
  const getNewTaskId = (): number => {
    return (
      Math.max.apply(
        Math,
        tasks.map(function (o: ITask) {
          return o.id;
        })
      ) + 1
    );
  };

  /**
   * Adds task
   *
   * @param task An ITask typed object with the task ID, text, day and reminder values.
   */
  const addTask = (task: ITask) => {
    const id: number = getNewTaskId();
    const newTask: ITask = { ...task, id };
    setTasks([...tasks, newTask]);
  };
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
      <Header title="To do" onAdd={() => setShowAddTask(!showAddTask)} />
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

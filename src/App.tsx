import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ITask } from "./models/ITask";

function App() {
  const defaultTasks: ITask[] = [];
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(defaultTasks);

  const apiUrl: string = process.env.REACT_APP_API_URL!;

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
    // eslint-disable-next-line
  }, []);

  /**
   * An async function that fetches the todo list items from JSON db
   */
  const fetchTasks = async () => {
    const res: Response = await fetch(apiUrl);
    const data = await res.json();
    return data;
  };

  /**
   * An async function that fetches a single task from a todo list
   * items from JSON db
   *
   */
  const fetchTask = async (id: number) => {
    const res: Response = await fetch(apiUrl + id);
    const data = await res.json();
    return data;
  };

  /**
   * Adds task
   *
   * @param task An ITask typed object with the task ID, text, day and reminder values.
   */
  const addTask = async (task: ITask) => {
    const res: Response = await fetch(apiUrl, {
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
    await fetch(apiUrl + id, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Toggle reminder
   *
   * @param id ID of a task
   */
  const toggleReminder = async (id: number) => {
    const task: ITask = await fetchTask(id);
    const updatedTask: ITask = { ...task, reminder: !task.reminder };

    const res: Response = await fetch(apiUrl + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data: ITask = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container is-widescreen">
        <Header
          title="To do"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                <h3>No items left</h3>
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

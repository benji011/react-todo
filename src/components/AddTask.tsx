import { useState } from "react";
import { IAddTask } from "../models/props/IAddTask";
import { FormEvent } from "react";

const AddTask = (props: IAddTask) => {
  const onAdd = props.onAdd;

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text) {
      alert("Add a task");
      return;
    }
    onAdd({ text, day, reminder });
    // Clears all input
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Item</label>
        <input
          className="input is-normal"
          type="text"
          placeholder="Add Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label>Day</label>
        <input
          className="input is-normal"
          type="text"
          placeholder="Add Item"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <div className="form-control-check">
          <label>Set reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder.toString()}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input className="button is-primary" type="submit" value="Saved todo" />
      </div>
    </form>
  );
};

export default AddTask;

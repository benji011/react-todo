const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <div className="field">
          <label className="label">Item</label>
          <div className="control">
            <input className="input" type="text" placeholder="Add item" />
          </div>
          <label className="label">Day</label>
          <div className="control">
            <input className="input" type="text" placeholder="Add item" />
          </div>
          <label>Set reminder</label>
          <label className="checkbox">
            <input type="checkbox" />
            Save my preferences
          </label>
          <button className="button is-link is-light" value="saved todo">
            Save my preferences
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;

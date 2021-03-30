import Button from "./Button";
import { IHeader } from "../models/props/IHeader";

const Header = (props: IHeader) => {
  const { title, onAdd, showAdd } = props;
  return (
    <header className="header">
      <img className="header-img" src="img/todo.svg" alt="header" />
      <h1 className="title">{title}</h1>
      <Button
        showAdd={showAdd}
        text={showAdd ? "Cancel" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

export default Header;

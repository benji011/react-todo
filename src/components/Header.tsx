import Button from "./Button";
import { IHeader } from "../models/props/IHeader";

const Header = (props: IHeader) => {
  const { title, onAdd } = props;
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <Button text="Add" onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

// CSS Custom styles in JS
// const heading: object = { color: "red", backgroundColor: "black" };

export default Header;
